import apiEngine from "./apiEngine";
import { GET, POST, PUT, PATCH } from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl

export default {
  get: jwt => apiEngine(GET, `${apiUrl}/users`,
      { 
        auth: jwt 
      }),
};
