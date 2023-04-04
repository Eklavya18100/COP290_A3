import apiEngine from "./apiEngine";
import {GET, POST, DELETE} from "./methods";
// import { apiServerUrlV2 } from '../../config';

let apiServerUrlV2 = "http://localhost:5001";

export default {
  list: jwt =>  apiEngine(GET,
    `${apiServerUrlV2}/history/views/me`,
    { auth: jwt }),
  insertLog: (jwt, data) =>  apiEngine(POST,
    `${apiServerUrlV2}/logs`,
    {  data: data, auth: jwt }),
}
