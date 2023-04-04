import {
  DNA_PRODUCT_RANKING_SUCCESS,
  DNA_PRODUCT_RANKING_FAILURE,
  DNA_PRODUCT_RANKING_REQUESTING, SET_SITUATION_TYPE,
} from '../reducers/dna/dnaProductRanking';

import {
  FETCH_SITUATIONS_FAILURE,
  FETCH_SITUATIONS_SUCCESS,
  FETCH_SITUATIONS_REQUESTING
} from "../reducers/dna/situations";

export const DNA_PRODUCT_RANKING = 'DNA_PRODUCT_RANKING';
export const FETCH_SITUATIONS = 'FETCH_SITUATIONS';
export const DNA_PDF_RECOMMEND = 'DNA_PDF_RECOMMEND';

import dnaApi from '../api/dna'
import { all, select, put, call } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"
import {normalize, schema} from "normalizr";
import {
  DNA_PDF_RECOMMEND_FAILURE,
  DNA_PDF_RECOMMEND_REQUESTING,
  DNA_PDF_RECOMMEND_SUCCESS, SET_DNA_PDF_RECOMMEND_PROGRESS,
} from '../reducers/dna/dnaPdfRecommend';
import { SET_SITUATION_IDS } from '../reducers/dna/dnaProductRanking';
import SituationTypes from '../../constants/SituationTypes';

const takeEvery:any = Eff.takeEvery

const situationSch = new schema.Entity(
  'situations', {}, {idAttribute: 'id'}
);
const arraySituationSch = new schema.Array(situationSch);

const productScoreSch = new schema.Entity(
  'productScores', {}, {idAttribute: 'id'}
);
const arrayProductScoreSch = new schema.Array(productScoreSch);

function *dnaProductRanking(){
  const readyStatus = yield select(state => state.situations.readyStatus)
  const situationIds = yield select(state => state.dnaProductRanking.situationIds)
  const situationType = yield select(state => state.dnaProductRanking.situationType)
  const cat_id = yield select(state => state.ux.cat_id)

  if(readyStatus === DNA_PRODUCT_RANKING_SUCCESS &&
    readyStatus === DNA_PRODUCT_RANKING_REQUESTING
  ) {
    return
  }

  yield put({type: DNA_PRODUCT_RANKING_REQUESTING});

  try {
    const json = yield call(dnaApi.dnaProductRanking, situationType, situationIds, cat_id);
    console.log(json)
    const data = json.data.data
    const overviewRanking = {}
    const termTypesRanking = {}

    data.forEach(i => {
      if(i.term_type_id in termTypesRanking){
       termTypesRanking[i.term_type_id][i.id] = i.score
      }
      else{
        termTypesRanking[i.term_type_id] = {}
        termTypesRanking[i.term_type_id][i.id] = i.score
      }
      if(i.id in overviewRanking){
        overviewRanking[i.id] += i.score
      }
      else{
        overviewRanking[i.id] = i.score
      }
    })
    yield put({type: DNA_PRODUCT_RANKING_SUCCESS, data: {
        '0': overviewRanking, ...termTypesRanking
      }})

  } catch (err) {
    console.log(err);
    console.log(typeof err);
    console.log(JSON.stringify(err));
    yield  put({type: DNA_PRODUCT_RANKING_FAILURE, err: err })
  }
}

function *fetchSituations(){

  const readyStatus = yield select(state => state.situations.readyStatus)

  if(readyStatus === FETCH_SITUATIONS_SUCCESS &&
    readyStatus === FETCH_SITUATIONS_REQUESTING
  ) {
    return
  }

  yield put({type: FETCH_SITUATIONS_REQUESTING});

  try {
    const json = yield call(dnaApi.listSituations);
    const normalizedData = yield call(normalize, json.data.data, arraySituationSch);
 
    let data = normalizedData.entities.situations;
    if(typeof data === 'undefined') data = {};
    yield put({type: FETCH_SITUATIONS_SUCCESS, data: data})
  } catch (err) {
  
    yield put({type: FETCH_SITUATIONS_FAILURE, err: err })
  }
}

const severity = {
  [SituationTypes.NO_RISK]: 1,
  [SituationTypes.HEALTH_RISK]: 2,
  [SituationTypes.CANCER_RISK]: 3
}

function *dnaPdfRecommend({ files, onUploadProgress = () => {} }){
  yield put({type: DNA_PDF_RECOMMEND_REQUESTING});
  try {
    yield call(fetchSituations)
    const situations = yield select(state => {
      return state.situations.readyStatus === FETCH_SITUATIONS_SUCCESS ?
        Object.keys(state.situations.data).map(k => state.situations.data[k]) : []
    })

    const json = yield call(dnaApi.dnaPdfRecommend, files, onUploadProgress);
    console.log(json)
    const riskProfile = json.data
    let highestLevelRisk = SituationTypes.NO_RISK

    yield put({type: DNA_PDF_RECOMMEND_SUCCESS, data:riskProfile})
    const situationIds = riskProfile
      .filter(r => r[3] === 1 || r === '1')
      .map(r => r[1])
      .map(n => {
        const idx = situations.findIndex(s => s.name === n)
        const item = situations[idx]
        if(severity[item.type_name] > severity[highestLevelRisk]) {
          highestLevelRisk = item.type_name
        }
        return idx >= 0 ? item.id : null
      })
      .filter(id => id !== null)
    console.log(situationIds)
    yield put({ type: SET_SITUATION_TYPE, value: highestLevelRisk})
    yield put({ type: SET_SITUATION_IDS, value: situationIds})
    yield call(dnaProductRanking)
  }
  catch(err){
    yield put({type: DNA_PDF_RECOMMEND_FAILURE, err: err })
  }
}

export default [
  takeEvery(FETCH_SITUATIONS, fetchSituations),
  takeEvery(DNA_PRODUCT_RANKING, dnaProductRanking),
  takeEvery(DNA_PDF_RECOMMEND, dnaPdfRecommend)
]
