import apiEngine from "./apiEngine";
import {GET, POST, DELETE} from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl

export default {
  search: data =>
    apiEngine(POST, `${apiUrl}/search`,
    {
     data: data
    })
}

