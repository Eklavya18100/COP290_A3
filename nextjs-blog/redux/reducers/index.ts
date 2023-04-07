import ux from "./ux";
import login from "./iam/login";
import register from "./iam/register";

import profile from "./iam/profile";

import afterLoginAction from "./iam/afterLoginAction";

import securityToken from "./iam/securityToken";
import storage from "./storage";
import codeLogin from "./iam/codeLogin";
import resetPw from "./iam/resetPw";
import sendResetPwMail from "./iam/sendResetPwMail";

import user from "./user";

import bookmarks from "./bookmarks/bookmarks.js";
import addBookmark from "./bookmarks/addBookmark.js";
import removeBookmark from "./bookmarks/removeBookmark.js";

import { combineReducers } from "redux";

const reducers = combineReducers({
  afterLoginAction,
  ux,
  login,
  register,

  profile, 

  securityToken,
  storage,
  codeLogin,
  resetPw,
  sendResetPwMail,

  user,

  bookmarks,

  addBookmark,
  removeBookmark,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
