import apiEngine from "./apiEngine";
import {GET, POST, DELETE} from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl
const extractionApiServerUrl = config.extractionApiServerUrl

export default {
  dnaProductRanking: (situationType, situationIds, cat_id) =>
    apiEngine(POST, `${apiUrl}/personal-rank-products`,
    {
      data: {
        situationType,
        situationIds,
        cat_id
      }
    }),
  listSituations: () => apiEngine(GET, `${apiUrl}/situations`),
  dnaPdfRecommend: (files, onUploadProgress) => apiEngine(POST,
    `${extractionApiServerUrl}/dna-pdf-recommend`,
    {files, onUploadProgress})
}
