"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_namespaceObject);
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./redux/reducers/ux.ts + 1 modules
var ux = __webpack_require__(6325);
;// CONCATENATED MODULE: ./redux/reducers/iam/login.ts
const LOGIN_INVALID = "LOGIN_INVALID";
const LOGIN_REQUESTING = "LOGIN_REQUESTING";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const initialState = {
    readyStatus: LOGIN_INVALID,
    err: null
};
const LOGIN_FAILURE_MSG = {
    LOGIN_FAILURE: {
        USER_NOT_FOUND: "The email does not exist.",
        WRONG_PASSWORD: "The password is wrong"
    }
};
/* harmony default export */ const login = ((state, action)=>{
    if (typeof state === "undefined") {
        state = initialState;
    }
    switch(action.type){
        case LOGIN_INVALID:
            return {
                ...state,
                readyStatus: LOGIN_INVALID,
                err: null
            };
        case LOGIN_REQUESTING:
            return {
                ...state,
                readyStatus: LOGIN_REQUESTING,
                err: action.err
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                readyStatus: LOGIN_SUCCESS
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                readyStatus: LOGIN_FAILURE,
                err: action.err
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/register.ts
const REGISTER_INVALID = " REGISTER_INVALID";
const REGISTER_REQUESTING = " REGISTER_REQUESTING";
const REGISTER_FAILURE = "REGISTER_FAILURE";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE_MSG = {
    USER_EXISTED: "This email is already registered"
};
const register_initialState = {
    readyStatus: REGISTER_INVALID,
    err: null
};
/* harmony default export */ const register = ((state, action)=>{
    if (typeof state === "undefined") {
        state = register_initialState;
    }
    switch(action.type){
        case REGISTER_INVALID:
            return {
                ...state,
                readyStatus: REGISTER_INVALID,
                err: null
            };
        case REGISTER_REQUESTING:
            return {
                ...state,
                readyStatus: REGISTER_REQUESTING,
                requestId: null
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                readyStatus: REGISTER_SUCCESS,
                err: null
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                readyStatus: REGISTER_FAILURE,
                err: action.err
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: external "lodash/fp"
const fp_namespaceObject = require("lodash/fp");
var fp_default = /*#__PURE__*/__webpack_require__.n(fp_namespaceObject);
;// CONCATENATED MODULE: ./redux/reducers/iam/profile.ts

const FETCH_DETAIL_INFO_REQUESTING = "FETCH_DETAIL_INFO_REQUESTING";
const FETCH_DETAIL_INFO_FAILURE = "FETCH_DETAIL_INFO_FAILURE";
const FETCH_DETAIL_INFO_SUCCESS = "FETCH_DETAIL_INFO_SUCCESS";
const FETCH_DETAIL_INFO_INVALID = "FETCH_DETAIL_INFO_INVALID";
const RESET_PROFILE = "RESET_PROFILE";
const APPEND_PROFILE_FAV_PROP = "APPEND_PROFILE_FAV_PROP";
const REMOVE_PROFILE_FAV_PROP = "REMOVE_PROFILE_FAV_PROP";
const UPDATE_AVATAR_STATUS = "UPDATE_AVATAR_STATUS";
const UPDATE_AVATAR_REQUESTING = "UPDATE_AVATAR_REQUESTING";
const profile_initialState = {
    readyStatus: FETCH_DETAIL_INFO_INVALID,
    err: null,
    data: {}
};
/* harmony default export */ const profile = ((state = profile_initialState, action)=>{
    switch(action.type){
        case RESET_PROFILE:
            return profile_initialState;
        case FETCH_DETAIL_INFO_REQUESTING:
            return fp_default().assign(state, {
                readyStatus: FETCH_DETAIL_INFO_REQUESTING
            });
        case FETCH_DETAIL_INFO_FAILURE:
            return fp_default().assign(state, {
                readyStatus: FETCH_DETAIL_INFO_FAILURE,
                err: action.err
            });
        case FETCH_DETAIL_INFO_SUCCESS:
            return fp_default().assign(state, {
                readyStatus: FETCH_DETAIL_INFO_SUCCESS,
                data: action.data
            });
        case APPEND_PROFILE_FAV_PROP:
            return fp_default().assign(state, {
                ...state,
                data: {
                    ...state.data,
                    favProps: [
                        ...state.data.favProps,
                        action.id
                    ]
                }
            });
        case REMOVE_PROFILE_FAV_PROP:
            return fp_default().assign(state, {
                ...state,
                data: {
                    ...state.data,
                    favProps: state.data.favProps.filter((id)=>id !== action.id)
                }
            });
        case UPDATE_AVATAR_STATUS:
            return {
                ...state,
                data: {
                    ...state.data,
                    thumbnail: {
                        readyStatus: action.readyStatus,
                        progress: action.progress,
                        url: action.url
                    }
                }
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/afterLoginAction.ts
const SET_AFTER_LOGIN_ACTION = "SET_AFTER_LOGIN_ACTION";
const afterLoginAction_initialState = null;
/* harmony default export */ const afterLoginAction = ((state, action)=>{
    if (typeof state === "undefined") {
        state = afterLoginAction_initialState;
    }
    switch(action.type){
        case SET_AFTER_LOGIN_ACTION:
            return action.detail;
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/securityToken.ts
const SECURITY_TOKEN_INVALID = " SECURITY_TOKEN_INVALID";
const SECURITY_TOKEN_REQUESTING = " SECURITY_TOKEN_REQUESTING";
const SECURITY_TOKEN_FAILURE = "SECURITY_TOKEN_FAILURE";
const SECURITY_TOKEN_SUCCESS = "SECURITY_TOKEN_SUCCESS";
const securityToken_initialState = {
    readyStatus: SECURITY_TOKEN_INVALID,
    err: null
};
/* harmony default export */ const securityToken = ((state, action)=>{
    if (typeof state === "undefined") {
        state = securityToken_initialState;
    }
    switch(action.type){
        case SECURITY_TOKEN_INVALID:
            return {
                ...state,
                readyStatus: SECURITY_TOKEN_INVALID,
                err: null
            };
        case SECURITY_TOKEN_REQUESTING:
            return {
                ...state,
                readyStatus: SECURITY_TOKEN_REQUESTING,
                requestId: null
            };
        case SECURITY_TOKEN_SUCCESS:
            return {
                ...state,
                readyStatus: SECURITY_TOKEN_SUCCESS,
                err: null
            };
        case SECURITY_TOKEN_FAILURE:
            return {
                ...state,
                readyStatus: SECURITY_TOKEN_FAILURE,
                err: action.err
            };
        default:
            return state;
    }
});

// EXTERNAL MODULE: ./redux/reducers/storage.ts
var storage = __webpack_require__(4434);
;// CONCATENATED MODULE: ./redux/reducers/iam/codeLogin.ts
const CODE_LOGIN_FAILURE = "CODE_LOGIN_FAILURE";
const CODE_LOGIN_SUCCESS = "CODE_LOGIN_SUCCESS";
const CODE_LOGIN_INVALID = "CODE_LOGIN_INVALID";
const CODE_LOGIN_REQUESTING = "CODE_LOGIN_REQUESTING";
const codeLogin_initialState = {
    readyStatus: CODE_LOGIN_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const codeLogin = ((state = codeLogin_initialState, action)=>{
    switch(action.type){
        case CODE_LOGIN_SUCCESS:
            return {
                ...state,
                readyStatus: CODE_LOGIN_SUCCESS,
                data: action.data
            };
        case CODE_LOGIN_FAILURE:
            return {
                ...state,
                readyStatus: CODE_LOGIN_FAILURE,
                err: action.err
            };
        case CODE_LOGIN_REQUESTING:
            return {
                ...state,
                readyStatus: CODE_LOGIN_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/resetPw.ts
const RESET_PW_FAILURE = "RESET_PW_FAILURE";
const RESET_PW_SUCCESS = "RESET_PW_SUCCESS";
const RESET_PW_INVALID = "RESET_PW_INVALID";
const RESET_PW_REQUESTING = "RESET_PW_REQUESTING";
const resetPw_initialState = {
    readyStatus: RESET_PW_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const resetPw = ((state = resetPw_initialState, action)=>{
    switch(action.type){
        case RESET_PW_SUCCESS:
            return {
                ...state,
                readyStatus: RESET_PW_SUCCESS,
                data: action.data
            };
        case RESET_PW_FAILURE:
            return {
                ...state,
                readyStatus: RESET_PW_FAILURE,
                err: action.err
            };
        case RESET_PW_REQUESTING:
            return {
                ...state,
                readyStatus: RESET_PW_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/sendResetPwMail.ts
const SEND_RESET_PW_MAIL_FAILURE = "SEND_RESET_PW_MAIL_FAILURE";
const SEND_RESET_PW_MAIL_SUCCESS = "SEND_RESET_PW_MAIL_SUCCESS";
const SEND_RESET_PW_MAIL_INVALID = "SEND_RESET_PW_MAIL_INVALID";
const SEND_RESET_PW_MAIL_REQUESTING = "SEND_RESET_PW_MAIL_REQUESTING";
const sendResetPwMail_initialState = {
    readyStatus: SEND_RESET_PW_MAIL_INVALID,
    email: null,
    data: null,
    err: null
};
/* harmony default export */ const sendResetPwMail = ((state = sendResetPwMail_initialState, action)=>{
    switch(action.type){
        case SEND_RESET_PW_MAIL_SUCCESS:
            return {
                ...state,
                readyStatus: SEND_RESET_PW_MAIL_SUCCESS,
                data: action.data
            };
        case SEND_RESET_PW_MAIL_FAILURE:
            return {
                ...state,
                readyStatus: SEND_RESET_PW_MAIL_FAILURE,
                err: action.err
            };
        case SEND_RESET_PW_MAIL_REQUESTING:
            return {
                ...state,
                readyStatus: SEND_RESET_PW_MAIL_REQUESTING,
                email: action.email
            };
        case SEND_RESET_PW_MAIL_INVALID:
            return sendResetPwMail_initialState;
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/user.ts

const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_INVALID = "FETCH_UESR_INVALID";
const FETCH_USER_REQUESTING = "FETCH_UESR_REQUESTING";
const user_initialState = {
    readyStatus: FETCH_USER_INVALID,
    data: {
        username: null,
        email: null,
        phone: null,
        freeQuota: null,
        paidQuota: null,
        accQuota: null,
        lastFreeQuotaUpdateDate: null,
        lastPurchaseDate: null,
        emailVerifiedAt: null,
        isAdmin: null
    },
    err: null
};
/* harmony default export */ const user = ((state = user_initialState, action)=>{
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                readyStatus: FETCH_USER_SUCCESS,
                data: {
                    ...state.data,
                    ...action.data
                }
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                readyStatus: FETCH_USER_FAILURE,
                err: action.err
            };
        case FETCH_USER_REQUESTING:
            return {
                ...state,
                readyStatus: FETCH_USER_REQUESTING
            };
        case storage/* REMOVE_USER_SESSION_MEMORY */._J:
            return {
                ...user_initialState
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/bookmarks/bookmarks.js
const FETCH_BOOKMARKS_FAILURE = "FETCH_BOOKMARKS_FAILURE";
const FETCH_BOOKMARKS_SUCCESS = "FETCH_BOOKMARKS_SUCCESS";
const FETCH_BOOKMARKS_INVALID = "FETCH_BOOKMARKS_INVALID";
const FETCH_BOOKMARKS_REQUESTING = "FETCH_BOOKMARKS_REQUESTING";
const APPEND_BOOKMARK_CACHE = "APPEND_BOOKMARK_CACHE";
const REMOVE_BOOKMARK_CACHE = "REMOVE_BOOKMARK_CACHE";
const bookmarks_initialState = {
    readyStatus: FETCH_BOOKMARKS_INVALID,
    data: [],
    err: null
};
/* harmony default export */ const bookmarks = ((state = bookmarks_initialState, action)=>{
    switch(action.type){
        case APPEND_BOOKMARK_CACHE:
            return {
                ...state,
                cache: [
                    ...state.data,
                    {
                        ...action.data,
                        cache: true
                    }
                ]
            };
        case REMOVE_BOOKMARK_CACHE:
            const product = action.data;
            if (state.data != null) {
                let idx = state.data.findIndex((b)=>b.p_uid === product.p_uid && b.p_gender === product.p_gender && b.p_smoking_st === product.p_smoking_st && b.p_lower_age === product.p_lower_age && b.p_payment_term === product.p_payment_term && b.p_sum_ins === product.p_sum_ins && b.p_ann_pre === product.p_ann_pre && b.cache === true);
                return idx >= 0 ? {
                    ...state,
                    data: [
                        ...state.data.slice(0, idx),
                        ...state.data.slice(idx + 1)
                    ]
                } : state;
            } else {
                return [
                    action.data
                ];
            }
        case FETCH_BOOKMARKS_SUCCESS:
            return {
                ...state,
                readyStatus: FETCH_BOOKMARKS_SUCCESS,
                data: action.data,
                ids: action.ids
            };
        case FETCH_BOOKMARKS_FAILURE:
            return {
                ...state,
                readyStatus: FETCH_BOOKMARKS_FAILURE,
                err: action.err
            };
        case FETCH_BOOKMARKS_REQUESTING:
            return {
                ...state,
                readyStatus: FETCH_BOOKMARKS_REQUESTING
            };
        case FETCH_BOOKMARKS_INVALID:
            return bookmarks_initialState;
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/bookmarks/addBookmark.js
const ADD_BOOKMARK_FAILURE = "ADD_BOOKMARK_FAILURE";
const ADD_BOOKMARK_SUCCESS = "ADD_BOOKMARK_SUCCESS";
const ADD_BOOKMARK_INVALID = "ADD_BOOKMARK_INVALID";
const ADD_BOOKMARK_REQUESTING = "ADD_BOOKMARK_REQUESTING";
const addBookmark_initialState = {
    readyStatus: ADD_BOOKMARK_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const addBookmark = ((state = addBookmark_initialState, action)=>{
    switch(action.type){
        case ADD_BOOKMARK_SUCCESS:
            return {
                ...state,
                readyStatus: ADD_BOOKMARK_SUCCESS,
                data: action.data
            };
        case ADD_BOOKMARK_FAILURE:
            return {
                ...state,
                readyStatus: ADD_BOOKMARK_FAILURE,
                err: action.err
            };
        case ADD_BOOKMARK_REQUESTING:
            return {
                ...state,
                readyStatus: ADD_BOOKMARK_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/bookmarks/removeBookmark.js
const REMOVE_BOOKMARK_FAILURE = "REMOVE_BOOKMARK_FAILURE";
const REMOVE_BOOKMARK_SUCCESS = "REMOVE_BOOKMARK_SUCCESS";
const REMOVE_BOOKMARK_INVALID = "REMOVE_BOOKMARK_INVALID";
const REMOVE_BOOKMARK_REQUESTING = "REMOVE_BOOKMARK_REQUESTING";
const removeBookmark_initialState = {
    readyStatus: REMOVE_BOOKMARK_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const removeBookmark = ((state = removeBookmark_initialState, action)=>{
    switch(action.type){
        case REMOVE_BOOKMARK_SUCCESS:
            return {
                ...state,
                readyStatus: REMOVE_BOOKMARK_SUCCESS,
                data: action.data
            };
        case REMOVE_BOOKMARK_FAILURE:
            return {
                ...state,
                readyStatus: REMOVE_BOOKMARK_FAILURE,
                err: action.err
            };
        case REMOVE_BOOKMARK_REQUESTING:
            return {
                ...state,
                readyStatus: REMOVE_BOOKMARK_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/index.ts















const reducers = (0,external_redux_namespaceObject.combineReducers)({
    afterLoginAction: afterLoginAction,
    ux: ux/* default */.ZP,
    login: login,
    register: register,
    profile: profile,
    securityToken: securityToken,
    storage: storage/* default */.ZP,
    codeLogin: codeLogin,
    resetPw: resetPw,
    sendResetPwMail: sendResetPwMail,
    user: user,
    bookmarks: bookmarks,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark
});
/* harmony default export */ const redux_reducers = (reducers);

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
;// CONCATENATED MODULE: ./redux/reducers/iam/verifyMail.ts
const VERIFY_MAIL_FAILURE = "VERIFY_MAIL_FAILURE";
const VERIFY_MAIL_SUCCESS = "VERIFY_MAIL_SUCCESS";
const VERIFY_MAIL_INVALID = "VERIFY_MAIL_INVALID";
const VERIFY_MAIL_REQUESTING = "VERIFY_MAIL_REQUESTING";
const verifyMail_initialState = {
    readyStatus: VERIFY_MAIL_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const verifyMail = ((state = verifyMail_initialState, action)=>{
    switch(action.type){
        case VERIFY_MAIL_SUCCESS:
            return {
                ...state,
                readyStatus: VERIFY_MAIL_SUCCESS,
                data: action.data
            };
        case VERIFY_MAIL_FAILURE:
            return {
                ...state,
                readyStatus: VERIFY_MAIL_FAILURE,
                err: action.err
            };
        case VERIFY_MAIL_REQUESTING:
            return {
                ...state,
                readyStatus: VERIFY_MAIL_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./redux/reducers/iam/sendVerifyMail.ts
const SEND_VERIFY_MAIL_FAILURE = "SEND_VERIFY_MAIL_FAILURE";
const SEND_VERIFY_MAIL_SUCCESS = "SEND_VERIFY_MAIL_SUCCESS";
const SEND_VERIFY_MAIL_INVALID = "SEND_VERIFY_MAIL_INVALID";
const SEND_VERIFY_MAIL_REQUESTING = "SEND_VERIFY_MAIL_REQUESTING";
const sendVerifyMail_initialState = {
    readyStatus: SEND_VERIFY_MAIL_INVALID,
    data: null,
    err: null
};
/* harmony default export */ const sendVerifyMail = ((state = sendVerifyMail_initialState, action)=>{
    switch(action.type){
        case SEND_VERIFY_MAIL_SUCCESS:
            return {
                ...state,
                readyStatus: SEND_VERIFY_MAIL_SUCCESS,
                data: action.data
            };
        case SEND_VERIFY_MAIL_FAILURE:
            return {
                ...state,
                readyStatus: SEND_VERIFY_MAIL_FAILURE,
                err: action.err
            };
        case SEND_VERIFY_MAIL_REQUESTING:
            return {
                ...state,
                readyStatus: SEND_VERIFY_MAIL_REQUESTING
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "axios-extensions"
const external_axios_extensions_namespaceObject = require("axios-extensions");
;// CONCATENATED MODULE: ./redux/api/apiEngine.ts


const getApiUrl = (path, query = null)=>{
    let queryString = "";
    if (query) {
        Object.keys(query).map((k, i)=>{
            queryString += i === 0 ? "?" : "&";
            queryString += `${k}=${query[k]}`;
        });
    }
    return `${path}${queryString}`;
};
const ApiEngine = (method, path, { params , data , files , query , cache , onUploadProgress , auth  } = {})=>{
    const content = {
        method,
        url: getApiUrl(path, query),
        withCredentials: true
    };
    const headers = {};
    const config = {};
    const credentials = {};
    if (cache) {
        Object.assign(headers, {
            "Cache-Control": "no-cache"
        });
        Object.assign(config, {
            adapter: (0,external_axios_extensions_namespaceObject.cacheAdapterEnhancer)((external_axios_default()).defaults.adapter, true)
        });
    }
    if (params) {
        Object.assign(content, {
            params
        });
    }
    if (data) {
        if (params) Object.assign(headers, {
            "Content-Type": "application/json",
            withCredentials: true
        });
        Object.assign(content, {
            data
        });
    }
    if (auth != null) {
        Object.assign(headers, {
            "Authorization": `Bearer ${auth}`
        });
    }
    Object.assign(headers, {
        withCredentials: true
    });
    if (files) {
        const formData = new FormData();
        Object.keys(files).forEach((name)=>{
            formData.append(name, files[name]);
        });
        Object.assign(headers, {
            "Content-Type": "multipart/form-data"
        });
        Object.assign(content, {
            data: formData
        });
    }
    if (Object.getOwnPropertyNames(headers).length !== 0) {
        Object.assign(content, {
            headers
        });
    }
    if (Object.getOwnPropertyNames(credentials).length !== 0) {
        Object.assign(content, {
            credentials
        });
    }
    if (Object.getOwnPropertyNames(config).length !== 0) {
        Object.assign(content, {
            config
        });
    }
    return external_axios_default()(content);
};
/* harmony default export */ const apiEngine = (ApiEngine);

;// CONCATENATED MODULE: ./redux/api/methods.ts
const GET = "get";
const POST = "post";
const PUT = "put";
const PATCH = "patch";
const DELETE = "delete";

;// CONCATENATED MODULE: ./redux/api/iam.ts


const apiUrl = "http://127.0.0.1:8080";
console.log(apiUrl);
/* harmony default export */ const iam = ({
    emailLogin: (data)=>apiEngine(POST, `${apiUrl}/email-login`, data),
    emailRegister: (data)=>apiEngine(POST, `${apiUrl}/email-register`, data),
    sendResetPwMail: (data)=>apiEngine(POST, `${apiUrl}/send-reset-password-mail`, {
            data: data
        }),
    codeLogin: (data)=>apiEngine(POST, `${apiUrl}/code-login`, {
            data: data
        }),
    newPassword: (data)=>apiEngine(POST, `${apiUrl}/new-password`, {
            data: data
        }),
    verifyMail: (data)=>apiEngine(POST, `${apiUrl}/verify-email`, {
            data: data
        }),
    sendVerifyMail: (data)=>apiEngine(GET, `${apiUrl}/send-verification-mail`)
});

// EXTERNAL MODULE: ./constants/authModalPages.js
var authModalPages = __webpack_require__(2392);
;// CONCATENATED MODULE: ./redux/actions/iam/verifyMail.ts


const SEND_RESET_PW_MAIL = "SEND_RESET_PW_MAIL";
const RESET_PW = "RESET_PW";
const CODE_LOGIN = "CODE_LOGIN";
const VERIFY_MAIL = "VERIFY_MAIL";
const SEND_VERIFY_MAIL = "SEND_VERIFY_MAIL";





const takeEvery = effects_namespaceObject.takeEvery;
function* verifyMail_sendVerifyMail({ data  }) {
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.sendResetPwMail.readyStatus);
    const jwt = yield (0,effects_namespaceObject.select)((state)=>state.storage.jwt);
    if (readyStatus === SEND_VERIFY_MAIL_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: SEND_VERIFY_MAIL_REQUESTING,
        email: data.email
    });
    try {
        const res = yield (0,effects_namespaceObject.call)(iam.sendResetPwMail, data);
        console.log(res);
        yield (0,effects_namespaceObject.put)({
            type: SEND_VERIFY_MAIL_SUCCESS,
            data: res.data.data
        });
        yield (0,effects_namespaceObject.put)({
            type: ux/* SET_AUTH_MODAL_PAGE */.KU,
            value: authModalPages/* default.RESET_PASSWORD_INPUT_CODE */.Z.RESET_PASSWORD_INPUT_CODE
        });
    } catch (err) {
        console.log(err);
        console.log(typeof err);
        console.log(JSON.stringify(err));
        yield (0,effects_namespaceObject.put)({
            type: SEND_VERIFY_MAIL_FAILURE,
            err: err
        });
    }
}
function* verifyMail_verifyMail({ data  }) {
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.verifyMail.readyStatus);
    if (readyStatus === VERIFY_MAIL_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: VERIFY_MAIL_REQUESTING,
        email: data.email
    });
    try {
        const res = yield (0,effects_namespaceObject.call)(iam.verifyMail, data);
        console.log(res);
        yield (0,effects_namespaceObject.put)({
            type: VERIFY_MAIL_SUCCESS,
            data: res.data.data
        });
        yield (0,effects_namespaceObject.put)({
            type: ux/* SET_AUTH_MODAL_PAGE */.KU,
            value: authModalPages/* default.RESET_PASSWORD_INPUT_CODE */.Z.RESET_PASSWORD_INPUT_CODE
        });
    } catch (err) {
        console.log(err);
        console.log(typeof err);
        console.log(JSON.stringify(err));
        yield (0,effects_namespaceObject.put)({
            type: VERIFY_MAIL_FAILURE,
            err: err
        });
    }
}
/* harmony default export */ const iam_verifyMail = ([
    takeEvery(VERIFY_MAIL, verifyMail_verifyMail),
    takeEvery(SEND_VERIFY_MAIL, verifyMail_sendVerifyMail)
]);

;// CONCATENATED MODULE: ./helpers/handleErrors.ts

const CONNECTION_ERROR = "CONNECTION_ERROR";
const UNCAUGHT_SERVER_ERROR = "SERVER_ERROR";


function* handleErrors(action, err) {
    const whiteList = {
        EMAIL_UNVERIFIED: "EMAIL_UNVERIFIED",
        USER_EXISTED: "USER_EXISTED",
        EASY_PASSWORD: "EASY_PASSWORD",
        PROPERTY_NOT_FOUND: "PROPERTY_NOT_FOUND",
        LOGIN_USER_NOT_FOUND: "LOGIN_USER_NOT_FOUND",
        LOGIN_INCORRECT_PASSWORD: "LOGIN_INCORRECT_PASSWORD",
        USER_NOT_FOUND: "USER_NOT_FOUND"
    };
    console.log(err);
    if (typeof err.response !== "undefined" && typeof err.response.data !== "undefined" && Array.isArray(err.response.data.errors) && err.response.data.errors.length > 0) {
        const errs = err.response.data.errors;
        for(let i = 0; i < errs.length; i++){
            const e = errs[i];
            const code = e.code;
            if (!(code in whiteList)) {
                yield (0,effects_namespaceObject.all)([
                    (0,effects_namespaceObject.put)({
                        type: ux/* SET_UX_VALUE */.GN,
                        key: "abnormalError",
                        value: err.response.data.errors
                    }),
                    (0,effects_namespaceObject.put)({
                        type: ux/* SET_UX_VALUE */.GN,
                        key: "modalType",
                        value: ux/* modalTypes.INVALID */.KW.INVALID
                    })
                ]);
            }
            if (code === "EMAIL_UNVERIFIED") {
                yield (0,effects_namespaceObject.put)({
                    type: ux/* SET_UX_VALUE */.GN,
                    key: "modalType",
                    value: ux/* modalTypes.ACTION_NOT_VERIFIED */.KW.ACTION_NOT_VERIFIED
                });
            }
            if (code === "JWT_MALFORMED") {
                yield (0,effects_namespaceObject.call)(logoutUser);
            }
        }
        yield (0,effects_namespaceObject.put)({
            type: action,
            err: err.response.data.errors
        });
    } else if (typeof err.response !== "undefined") {
        console.log(err.response);
        console.log(err.response.data);
        const customErr = [
            {
                code: UNCAUGHT_SERVER_ERROR,
                msg: err.response.data,
                internal: true
            }
        ];
        yield (0,effects_namespaceObject.put)({
            type: action,
            err: customErr
        });
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: ux/* SET_UX_VALUE */.GN,
                key: "abnormalError",
                value: customErr
            }),
            (0,effects_namespaceObject.put)({
                type: ux/* SET_UX_VALUE */.GN,
                key: "modalType",
                value: ux/* modalTypes.INVALID */.KW.INVALID
            })
        ]);
    } else {
        const customErr1 = [
            {
                code: CONNECTION_ERROR,
                msg: err.message
            }
        ];
        yield (0,effects_namespaceObject.put)({
            type: action,
            err: customErr1
        });
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: ux/* SET_UX_VALUE */.GN,
                key: "abnormalError",
                value: customErr1
            }),
            (0,effects_namespaceObject.put)({
                type: ux/* SET_UX_VALUE */.GN,
                key: "modalType",
                value: ux/* modalTypes.INVALID */.KW.INVALID
            })
        ]);
    }
}

;// CONCATENATED MODULE: ./redux/actions/iam/auth.ts








// import cookieSetting from "../../../helpers/cookieSetting";

const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";
const SEND_ACTIVATE_ACCOUNT_MAIL = "SEND_ACTIVATE_ACCOUNT_MAIL";
const REMOVE_USER_SESSION_MEMORY = "REMOVE_USER_SESSION_MEMORY";
function* auth_login({ data , action =null , type  }) {
    console.log(data);
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.login.readyStatus);
    if (readyStatus === LOGIN_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: LOGIN_REQUESTING
    });
    try {
        const json = yield (0,effects_namespaceObject.call)(iam.emailLogin, data);
        const result = json.data.data;
        const { info , token  } = result;
        // cookie.set('info', info, cookieSetting);
        // cookie.set('token', token, cookieSetting);
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: LOGIN_SUCCESS
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "userID",
                value: info.cus_uid
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "isLoggedIn",
                value: true
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "loginType",
                value: "email"
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "userName",
                value: info.username
            }),
            (0,effects_namespaceObject.put)({
                type: ux/* SET_AUTH_MODAL_PAGE */.KU,
                value: authModalPages/* default.SUCCESS */.Z.SUCCESS
            })
        ]);
        yield (0,effects_namespaceObject.call)((router_default()).push, "/app");
    } catch (err) {
        yield handleErrors(LOGIN_FAILURE, err);
    }
}
function* auth_register({ data , action =null , type  }) {
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.register.readyStatus);
    if (readyStatus === REGISTER_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: REGISTER_REQUESTING
    });
    try {
        const json = yield (0,effects_namespaceObject.call)(iam.emailRegister, data);
        const result = json.data.data;
        console.log(json);
        const { info , token  } = result;
        // cookie.set('token', token, cookieSetting);
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: REGISTER_SUCCESS
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "userID",
                value: info.cus_uid
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "userType",
                value: "customer"
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "isLoggedIn",
                value: true
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "loginType",
                value: "email"
            }),
            (0,effects_namespaceObject.put)({
                type: storage/* SET_STORAGE_ITEM */.JO,
                key: "userName",
                value: info.username
            }),
            (0,effects_namespaceObject.put)({
                type: ux/* SET_AUTH_MODAL_PAGE */.KU,
                value: authModalPages/* default.EMAIL_VERIFICATION */.Z.EMAIL_VERIFICATION
            }), 
        ]);
    } catch (err) {
        yield handleErrors(REGISTER_FAILURE, err);
    }
}
function* logoutUser() {
    try {
        // cookie.remove('token', cookieSetting);
        // cookie.remove('info', cookieSetting);
        yield (0,effects_namespaceObject.put)({
            type: REMOVE_USER_SESSION_MEMORY
        });
        yield (0,effects_namespaceObject.call)((router_default()).push, "/");
    } catch (err) {
        alert("Logout user fail");
        throw err;
    }
}
/* harmony default export */ const auth = ([
    (0,effects_namespaceObject.takeEvery)(LOGIN, auth_login),
    (0,effects_namespaceObject.takeEvery)(REGISTER, auth_register),
    (0,effects_namespaceObject.takeEvery)(LOGOUT, logoutUser), 
]);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(8288);
;// CONCATENATED MODULE: ./redux/api/bookmarks.ts



const bookmarks_apiUrl = config/* default.apiUrl */.Z.apiUrl;
/* harmony default export */ const api_bookmarks = ({
    list: (jwt)=>apiEngine(GET, `${bookmarks_apiUrl}/history/bookmarks/me`, {
            auth: jwt
        }),
    add: (jwt, data)=>apiEngine(POST, `${bookmarks_apiUrl}/history/bookmarks/me/add`, {
            auth: jwt,
            data: data
        }),
    remove: (jwt, data)=>apiEngine(POST, `${bookmarks_apiUrl}/history/bookmarks/me/remove`, {
            auth: jwt,
            data: data
        })
});

;// CONCATENATED MODULE: ./redux/actions/bookmarks.ts



const FETCH_BOOKMARKS = "FETCH_BOOKMARKS";
const ADD_BOOKMARK = "ADD_BOOKMARK";
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";



const bookmarks_takeEvery = effects_namespaceObject.takeEvery;
function* fetchBookmarks() {
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.bookmarks.readyStatus);
    const jwt = yield (0,effects_namespaceObject.select)((state)=>state.storage.jwt);
    if (readyStatus === FETCH_BOOKMARKS_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: FETCH_BOOKMARKS_REQUESTING
    });
    try {
        const res = yield (0,effects_namespaceObject.call)(api_bookmarks.list, jwt);
        yield (0,effects_namespaceObject.put)({
            type: FETCH_BOOKMARKS_SUCCESS,
            data: res.data.data,
            ids: res.data.data.map((d)=>d.p_uid)
        });
    } catch (err) {
        console.log(err);
        yield (0,effects_namespaceObject.put)({
            type: FETCH_BOOKMARKS_FAILURE,
            err: err
        });
    }
}
function* bookmarks_addBookmark({ product  }) {
    console.log("addproduct", product);
    const params = {
        productId: product.p_iid,
        productGender: product.p_gender,
        smokingStatus: product.p_smoking_st,
        lowerAge: product.p_lower_age,
        paymentTerm: product.p_payment_term,
        sumInsured: product.p_sum_ins,
        annPremium: product.p_ann_pre,
        room: product.room,
        medicalBenefit: product.medical_benefit,
        geographicCoverage: product.geographic_coverage,
        deductible: product.deductible
    };
    yield (0,effects_namespaceObject.put)({
        type: APPEND_BOOKMARK_CACHE,
        data: product
    });
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.addBookmark.readyStatus);
    const jwt = yield (0,effects_namespaceObject.select)((state)=>state.storage.jwt);
    if (readyStatus === ADD_BOOKMARK_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: ADD_BOOKMARK_REQUESTING
    });
    try {
        let data = [];
        const res = yield (0,effects_namespaceObject.call)(api_bookmarks.add, jwt, params);
        data = res.data.data;
        const ids = data.map((d)=>d.p_uid);
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: ADD_BOOKMARK_SUCCESS,
                data: "ok"
            }),
            (0,effects_namespaceObject.put)({
                type: FETCH_BOOKMARKS_SUCCESS,
                data: data,
                ids: ids
            })
        ]);
    } catch (err) {
        console.log(err);
        yield (0,effects_namespaceObject.put)({
            type: REMOVE_BOOKMARK_CACHE,
            data: product
        });
        yield (0,effects_namespaceObject.put)({
            type: ADD_BOOKMARK_FAILURE,
            err: err
        });
    }
}
function* bookmarks_removeBookmark({ product  }) {
    const params = {
        productId: product.p_iid,
        productGender: product.p_gender,
        smokingStatus: product.p_smoking_st,
        lowerAge: product.p_lower_age,
        paymentTerm: product.p_payment_term,
        sumInsured: product.p_sum_ins,
        annPremium: product.p_ann_pre,
        room: product.room,
        medicalBenefit: product.medical_benefit,
        geographicCoverage: product.geographic_coverage,
        deductible: product.deductible
    };
    yield (0,effects_namespaceObject.put)({
        type: REMOVE_BOOKMARK_CACHE,
        data: product
    });
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.removeBookmark.readyStatus);
    const jwt = yield (0,effects_namespaceObject.select)((state)=>state.storage.jwt);
    if (readyStatus === REMOVE_BOOKMARK_REQUESTING) return;
    yield (0,effects_namespaceObject.put)({
        type: REMOVE_BOOKMARK_REQUESTING
    });
    try {
        let data = [];
        const res = yield (0,effects_namespaceObject.call)(api_bookmarks.remove, jwt, params);
        data = res.data.data;
        yield (0,effects_namespaceObject.all)([
            (0,effects_namespaceObject.put)({
                type: REMOVE_BOOKMARK_SUCCESS,
                data: "ok"
            }),
            (0,effects_namespaceObject.put)({
                type: FETCH_BOOKMARKS_SUCCESS,
                data: data
            })
        ]);
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: APPEND_BOOKMARK_CACHE,
            data: product
        });
        yield (0,effects_namespaceObject.put)({
            type: REMOVE_BOOKMARK_FAILURE,
            err: err
        });
    }
}
/* harmony default export */ const actions_bookmarks = ([
    bookmarks_takeEvery(FETCH_BOOKMARKS, fetchBookmarks),
    bookmarks_takeEvery(ADD_BOOKMARK, bookmarks_addBookmark),
    bookmarks_takeEvery(REMOVE_BOOKMARK, bookmarks_removeBookmark)
]);

;// CONCATENATED MODULE: ./redux/api/user.ts



const user_apiUrl = config/* default.apiUrl */.Z.apiUrl;
/* harmony default export */ const api_user = ({
    get: (jwt)=>apiEngine(GET, `${user_apiUrl}/users`, {
            auth: jwt
        })
});

;// CONCATENATED MODULE: ./redux/actions/user.ts

const FETCH_USER = "FETCH_USER";



const user_takeEvery = effects_namespaceObject.takeEvery;
function* fetchUser() {
    const readyStatus = yield (0,effects_namespaceObject.select)((state)=>state.user.readyStatus);
    const jwt = yield (0,effects_namespaceObject.select)((state)=>state.storage.jwt);
    // alert(jwt);
    if (readyStatus !== FETCH_USER_SUCCESS) {
        yield (0,effects_namespaceObject.put)({
            type: FETCH_USER_REQUESTING
        });
    }
    try {
        const r = yield (0,effects_namespaceObject.call)(api_user.get, jwt);
        const res = r.data.data;
        if (res["updated_quota"] > 0) {}
        yield (0,effects_namespaceObject.put)({
            type: FETCH_USER_SUCCESS,
            data: {
                freeQuota: parseInt(res["free_quota"]),
                paidQuota: parseInt(res["paid_quota"]),
                accQuota: parseInt(res["acc_quota"]),
                lastFreeQuotaUpdateDate: res["last_update_quota"],
                lastPurchaseDate: res["last_purchase_date"],
                updatedQuota: res["updated_quota"],
                isAdmin: res["is_admin"],
                email: res.email,
                username: res.username,
                phone: res.phone
            }
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: FETCH_USER_FAILURE,
            err: err
        });
    }
}
/* harmony default export */ const actions_user = ([
    user_takeEvery(FETCH_USER, fetchUser)
]);

;// CONCATENATED MODULE: ./redux/actions/index.ts
// index.tsx





function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        ...auth,
        ...actions_user,
        ...actions_bookmarks,
        ...iam_verifyMail, 
    ]);
};

;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./redux/store.ts







const makeStore = (context)=>{
    // 1: Create the middleware
    const sagaMiddleware = external_redux_saga_default()();
    const makeConfiguredStore = (reducer)=>{
        // 2: Add an extra parameter for applying middleware:
        // const middlewares = process.env.NODE_ENV === 'development'
        //   ?  applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware);
        // * original code for setting stores!
        // const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
        // * using composeWithDevTools allows you to see
        // * all the states stored in redux in google chrome!
        // ! don't forget to install redux devtools extension!
        const store = (0,external_redux_namespaceObject.createStore)(reducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware, (external_redux_logger_default()))));
        // 3: Run your sagas on server
        (store).sagaTask = sagaMiddleware.run(rootSaga);
        return store;
    };
    const isServer = "undefined" === "undefined";
    // if (isServer) {
    //   return makeConfiguredStore(reducer);
    // } else 
    {
        const { persistStore , persistReducer  } = __webpack_require__(4161);
        const storage = (__webpack_require__(8936)["default"]);
        const persistConfig = {
            key: "nextjs",
            whitelist: [
                "storage",
                "insurCalc",
                "user"
            ],
            storage
        };
        const persistedReducer = persistReducer(persistConfig, redux_reducers);
        const store = makeConfiguredStore(persistedReducer);
        store.__persistor = persistStore(store); // Nasty hack * 2 stores--> 1) store 2) store.__persistor
        return store;
    }
// 4: now return the store:
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore);

;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/_app.tsx




// import "react-vis/dist/style.css";
// import "../styles/global.scss";
// import "../styles/editor.scss";
// import "../styles/quill.snow.css"
// import "../styles/shop.scss"
// import "../styles/rheostat.css"








// const { apiUrl } = config;
router_default().events.on("routeChangeStart", (external_nprogress_default()).start);
router_default().events.on("routeChangeError", (external_nprogress_default()).done);
router_default().events.on("routeChangeComplete", (external_nprogress_default()).done);
const WrappedApp = (ctx)=>{
    const { Component , pageProps , router  } = ctx;
    const store = (0,external_react_redux_.useStore)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const isLoggedIn = (0,external_react_redux_.useSelector)((state)=>state.storage.isLoggedIn);
    const afterLoginAction = (0,external_react_redux_.useSelector)((state)=>state.afterLoginAction);
    // useEffect(() => {
    //   if (router.asPath !== router.route) {
    //     const r = router;
    //     if (router.query.action != null) {
    //       const splitted = router.asPath.split("?");
    //       const query = splitted.length === 2 ? splitted[1] : "";
    //       const splittedAgain = query.split("action=");
    //       const action = splittedAgain.length === 2 ? splittedAgain[1] : "";
    //       const actionJson = urlDecodeObj(action);
    //       dispatch({ type: SET_AFTER_LOGIN_ACTION, detail: actionJson });
    //     }
    //   }
    // }, [router]);
    (0,external_react_.useEffect)(()=>{
        const token = localStorage.getItem("token");
        // if (token != null) {
        //   dispatch({ type: SET_STORAGE_ITEM, key: "isLoggedIn", value: true });
        // }
        if (isLoggedIn) {
            dispatch({
                type: FETCH_USER
            });
            if (afterLoginAction !== null) {
                dispatch(afterLoginAction);
            }
        }
    }, [
        isLoggedIn
    ]);
    // useEffect(() => {
    //   const socket = socketIOClient(apiUrl);
    //   socket.on("connect", () => {
    //     dispatch({ type: SET_SOCKET_ID, id: socket.id })
    //   });
    //   socket.on("payment", data => {
    //     if(data.success === true) {
    //       dispatch({type: PAYMENT_STATUS_SUCCESS })
    //     }
    //     else if (data.success === false){
    //       dispatch({type: PAYMENT_STATUS_FAILURE })
    //     }
    //   });
    //   // CLEAN UP THE EFFECT
    //   return () => {
    //     socket.disconnect();
    //     return
    //   }
    // }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
            persistor: store.__persistor,
            loading: null,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
                children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                    ...pageProps,
                    key: router.route
                })
            })
        })
    });
};
/* harmony default export */ const _app = (wrapper.withRedux(WrappedApp));


/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [761], () => (__webpack_exec__(8336)));
module.exports = __webpack_exports__;

})();