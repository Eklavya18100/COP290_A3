import apiEngine from "./apiEngine";
import {GET, POST, DELETE} from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl

export default {
  list: (jwt) =>  apiEngine(GET,
    `${apiUrl}/history/bookmarks/me`,
    { auth: jwt}),
  add: (jwt, data) =>  apiEngine(POST,
    `${apiUrl}/history/bookmarks/me/add`,
    { auth: jwt, data: data }),
  remove: (jwt, data) =>apiEngine(POST,
    `${apiUrl}/history/bookmarks/me/remove`,
    { auth: jwt, data: data }),
}
