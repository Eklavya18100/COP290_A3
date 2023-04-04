// index.tsx
import { all } from "redux-saga/effects"

import verifyMail from './iam/verifyMail'
import auth from './iam/auth'
import bookmarks from './bookmarks';
import user from './user';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...user,
    ...bookmarks,
    ...verifyMail,
  ])
}
