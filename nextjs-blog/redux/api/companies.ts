import apiEngine from "./apiEngine";
import {GET, POST, DELETE} from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl

export default {
  list: () => {
    return apiEngine(GET, `${apiUrl}/get-company-data`)
  }
}
