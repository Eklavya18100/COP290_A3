import {useSelector} from 'react-redux';
import {tabNames} from '../../constants/tabNames';
import SituationTypes from '../../constants/SituationTypes'
import {FETCH_SITUATIONS_SUCCESS} from '../reducers/dna/situations';
export default state => {

  const situationType = state.dnaProductRanking.situationType
  const situations = state.situations
  const situationData =  situations.readyStatus === FETCH_SITUATIONS_SUCCESS ?
    situations.data : {}
  if(state.ux.navi_scrn !== tabNames.DNA){
    return {
      recWlSumInsured: null, recCiSumInsuredIdeal: null, recCiSumInsuredBasic: null
    }
  }
  const pickedDiseases = situationType === SituationTypes.NO_RISK ? [45] :
    state.dnaProductRanking.situationIds
  const pickedDiseasesData = Object.keys(situationData).map(k => situationData[k])
    .filter(i => pickedDiseases.indexOf(i.id) >= 0)
  const recWlSumInsured = pickedDiseasesData.reduce((a, b) =>
    a.wl_optional_sum_insured > b.wl_optional_sum_insured ? a : b, 0).wl_optional_sum_insured;
  const recCiSumInsuredIdeal = pickedDiseasesData.reduce((a, b) =>
    a.ci_ideal_sum_insured > b.ci_ideal_sum_insured ? a : b, 0).ci_ideal_sum_insured;
  const recCiSumInsuredBasic = pickedDiseasesData.reduce((a, b) =>
    a.ci_basic_sum_insured > b.ci_basic_sum_insured ? a : b, 0).ci_basic_sum_insured;
  return {
    recWlSumInsured, recCiSumInsuredIdeal, recCiSumInsuredBasic
  }
}
