import ux from "./ux.ts"
import login from "./iam/login.ts"
import register from "./iam/register.ts";
// import addPm from "./pms/addPm.ts";
// import removePm from "./pms/removePm.ts";
// import checkout from "./transaction/checkout.ts";
// import pms from './pms/pms.ts';
import profile from './iam/profile.ts';
import history from './bookmarks/history.js'
// import users from './dashbaord/users.ts';
// import addImages from "./dashbaord/addImages.ts";
// import plans from "./plans/plans.ts";
// import onePlan from "./plans/onePlan.ts";
// import stripeSetupIntent from "./transaction/stripeSetupIntent.ts";
// import paypalSubscribeIntent from "./transaction/paypalSubscribeIntent.ts";
// import paymentStatus from "./transaction/paymentStatus.ts";
// import subscriptions from "./dashbaord/subscriptions"
// import setDefaultPm from "./pms/setDefaultPm.ts";
// import subSetPm from "./pms/subSetPm.ts";
// import updateProfile from "./dashbaord/updateProfile.ts";
// import socket from "./socket"
// import suggestAddress from "./dashbaord/suggestAddress"
import afterLoginAction from "./iam/afterLoginAction.ts"
// import article from "./articles/article.ts";
// import structure from "./articles/structure.ts";
// import articles from "./articles/articles.ts";
import securityToken from "./iam/securityToken.ts";
import storage from './storage.ts'
import codeLogin from './iam/codeLogin.ts';
import resetPw from './iam/resetPw.ts';
import sendResetPwMail from './iam/sendResetPwMail.ts';
// import myPolicy from './myPolicy.ts';
import user from './user.ts'
import search from './search.ts';
import companies from './companies.ts';
// import dnaPdfRecommend from './dna/dnaPdfRecommend.ts';
// import dnaProductRanking from './dna/dnaProductRanking.ts';
// import situations from './dna/situations.ts';
import bookmarks from './bookmarks/bookmarks.js';
import addBookmark from './bookmarks/addBookmark.js';
import removeBookmark from './bookmarks/removeBookmark.js';
import product from './product.ts'
// import adminProduct from './admin/adminProduct.ts';
import insurCalc from "./insurCalc.ts";
import { combineReducers } from 'redux'
// import uploadCsv from './admin/uploadCsv.ts';
// import addProduct from './admin/addProduct.ts';
// import restartProduct from './admin/restartProduct'
import selectedItem from "./selectedItem.ts";

const reducers = combineReducers({
//   adminProduct,
  afterLoginAction,
  ux,
  login,
  register,
//   pms,
//   checkout,
  profile,
//   users,
//   stripeSetupIntent,
//   paypalSubscribeIntent,
//   addImages,
//   onePlan,
//   plans,
//   paymentStatus,
//   subscriptions,
//   addPm,
//   removePm,
//   setDefaultPm,
//   subSetPm,
//   updateProfile,
//   socket,
//   suggestAddress,
//   article,
//   articles,
//   structure,
  securityToken,
  storage,
  codeLogin,
  resetPw,
  sendResetPwMail,
//   myPolicy,
  user,
  // search,
  // companies,
  // dnaPdfRecommend,
  // dnaProductRanking,
  // situations,
  bookmarks,
  // history,
  addBookmark,
  removeBookmark,
  // product,
//   uploadCsv,
//   addProduct,
//   restartProduct,
  // insurCalc,
  // selectedItem,
});

export default reducers

export type RootState = ReturnType<typeof reducers>;
