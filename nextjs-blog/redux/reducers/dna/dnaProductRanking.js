import situationTypes from '../../../constants/SituationTypes';

export const DNA_PRODUCT_RANKING_FAILURE='DNA_PRODUCT_RANKING_FAILURE';
export const DNA_PRODUCT_RANKING_SUCCESS='DNA_PRODUCT_RANKING_SUCCESS';
export const DNA_PRODUCT_RANKING_INVALID='DNA_PRODUCT_RANKING_INVALID';
export const DNA_PRODUCT_RANKING_REQUESTING='DNA_PRODUCT_RANKING_REQUESTING';
export const SET_SITUATION_IDS='SET_SITUATION_IDS'
export const SET_SITUATION_TYPE='SET_SITUATION_TYPE'

const initialState = {
  situationType: situationTypes.NO_RISK,
  situationIds: [],
  readyStatus: DNA_PRODUCT_RANKING_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case SET_SITUATION_TYPE:
      return {  ...state, situationType: action.value }
    case SET_SITUATION_IDS:
      return {  ...state, situationIds: action.value }
    case DNA_PRODUCT_RANKING_SUCCESS:
      return { ...state, readyStatus: DNA_PRODUCT_RANKING_SUCCESS, data: action.data };
    case DNA_PRODUCT_RANKING_FAILURE:
      return { ...state, readyStatus: DNA_PRODUCT_RANKING_FAILURE, err: action.err };
    case DNA_PRODUCT_RANKING_REQUESTING:
      return { ...state, readyStatus: DNA_PRODUCT_RANKING_REQUESTING };
    default:
      return state;
  }
};
