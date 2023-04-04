import apiEngine from "./apiEngine.ts";
import { GET, POST, PUT, PATCH } from "./methods.ts";
import config from '../../config.ts';

const apiUrl = config.apiUrl

export default {
  get: jwt => apiEngine(GET, `${apiUrl}/users`,
      { 
        auth: jwt 
      }),
};
