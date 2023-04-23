"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const __DEV__ = "production" === "development";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mediaFileServerUrl: "https://app.mln.hk",
    extractionApiServerUrl: __DEV__ ? process.env.NEXT_PUBLIC_DEV_EXTRACTION_API_URL : process.env.NEXT_PUBLIC_PROD_EXTRACTION_API_URL,
    dataApiServerUrl: __DEV__ ? process.env.NEXT_PUBLIC_DEV_DATA_API_URL : process.env.NEXT_PUBLIC_PROD_DATA_API_URL,
    apiUrl: __DEV__ ? "http://127.0.0.1:8080" : "",
    webUrl: __DEV__ ? "localhost:3000" : "",
    apiNgrokUrl: __DEV__ ? "" : "",
    googleApiKey: process.env.GOOGLE_MAP_API_KEY,
    stripe: __DEV__ ? "pk_test_51HRbaUG68yzz2ulIQ0QbOZzk2JyymWhCoa5GZeYgLGh0cs1u6Z0ebgkvHZEkkBj24OYvA1RtLLxOvKBeI3os5jwE00Lav2cboR" : process.env.NEXT_PUBLIC_PROD_STRIPE_PUBLIC6_KEY,
    app: {
        htmlAttributes: {
            lang: "en"
        },
        title: "Test",
        titleTemplate: "Test - %s",
        meta: [
            {
                name: "description",
                content: "The best react universal starter boilerplate in the world."
            }
        ],
        links: [
            "https://fonts.googleapis.com/css?family=Tangerine",
            "/css/main.css"
        ]
    }
});


/***/ }),

/***/ 2392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    GATEWAY: "GATEWAY",
    EMAIL_AUTH: "EMAIL_AUTH",
    EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
    SEND_RESET_PASSWORD_MAIL: "SEND_RESET_PASSWORD_MAIL",
    RESET_PASSWORD_INPUT_CODE: "RESET_PASSWORD_INPUT_CODE",
    ENTER_NEW_PASSWORD: "ENTER_NEW_PASSWORD",
    SUCCESS: "SUCCESS"
});


/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JO": () => (/* binding */ SET_STORAGE_ITEM),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_J": () => (/* binding */ REMOVE_USER_SESSION_MEMORY)
/* harmony export */ });
const SET_STORAGE_ITEM = "SET_STORAGE_ITEM";
const REMOVE_USER_SESSION_MEMORY = "REMOVE_USER_SESSION_MEMORY";
const initialState = {
    jwt: null,
    userID: null,
    isLoggedIn: false,
    userType: "customer",
    loginType: "email",
    userName: "",
    ProPicUrl: null,
    email: null,
    isLangSelected: "en",
    dna_list_data: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{
    switch(action.type){
        case SET_STORAGE_ITEM:
            return {
                ...state,
                [action.key]: action.value
            };
        case REMOVE_USER_SESSION_MEMORY:
            return {
                ...initialState,
                isLangSelected: state.isLangSelected
            };
        default:
            return state;
    }
});


/***/ }),

/***/ 6325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KU": () => (/* binding */ SET_AUTH_MODAL_PAGE),
  "GN": () => (/* binding */ SET_UX_VALUE),
  "ZP": () => (/* binding */ ux),
  "KW": () => (/* binding */ modalTypes)
});

// UNUSED EXPORTS: FORM_NEXT, FORM_PREV, SET_CAT_ID, SET_FORM_PAGE_CURRENT, SET_FORM_PAGE_MAX, SET_NAVI_SCRN, SET_UPDATE_FORM_PAGE_CURRENT

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
;// CONCATENATED MODULE: ./constants/tabNames.js
const tabNames = {
    NONE: "none",
    HOME: "home",
    DNA: "dna",
    PLAN: "plan",
    PROFILE: "profile"
};
const getTabList = (releaseDnaFeature)=>releaseDnaFeature ? [
        tabNames.HOME,
        tabNames.DNA,
        tabNames.PLAN,
        tabNames.PROFILE
    ] : [
        tabNames.HOME,
        tabNames.PLAN,
        tabNames.PROFILE,
        tabNames.NONE
    ];

// EXTERNAL MODULE: ./constants/authModalPages.js
var authModalPages = __webpack_require__(2392);
;// CONCATENATED MODULE: ./redux/reducers/ux.ts



const SET_UX_VALUE = "SET_UX_VALUE";
const SET_NAVI_SCRN = "SET_NAVI_SCRN";
const FORM_NEXT = "FORM_NEXT";
const FORM_PREV = "FORM_PREV";
const SET_FORM_PAGE_CURRENT = "SET_FORM_PAGE_CURRENT";
const SET_FORM_PAGE_MAX = "SET_FORM_PAGE_MAX";
const SET_UPDATE_FORM_PAGE_CURRENT = "SET_UPDATE_FORM_PAGE_CURRENT";
const SET_AUTH_MODAL_PAGE = "SET_AUTH_MODAL_PAGE";
const SET_CAT_ID = "SET_CAT_ID";
const modalTypes = {
    REGISTER_NOT_VERIFIED: "REGISTER_NOT_VERIFIED",
    REGISTER_VERIFIED: "REGISTER_VERIFIED",
    LOGIN_NOT_VERIFIED: "LOGIN_NOT_VERIFIED",
    LOGIN_VERIFIED: "LOGIN_VERIFIED",
    ACTION_NOT_VERIFIED: "ACTION_NOT_VERIFIED",
    INVALID: "INVALID",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    FORGET_PASSWORD: "FORGET_PASSWORD",
    RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS"
};
const initialState = {
    commentPageActive: false,
    filterMenuActiveOnMobile: false,
    language: "en",
    isSearch: false,
    currency: null,
    authModalPage: authModalPages/* default.INVALID */.Z.INVALID,
    profileActive: false,
    sideBarActive: false,
    quotaModalActive: false,
    profileModalActive: false,
    abnormalError: null,
    cat_id: 1,
    navi_scrn: tabNames.HOME
};
/* harmony default export */ const ux = ((state = initialState, action)=>{
    // console.log(state)
    let current;
    switch(action.type){
        case external_next_redux_wrapper_.HYDRATE:
            console.log(action);
            return {
                ...state,
                ...action.payload.ux
            };
        case SET_AUTH_MODAL_PAGE:
            return {
                ...state,
                authModalPage: action.value
            };
        case SET_CAT_ID:
            return {
                ...state,
                cat_id: action.value
            };
        case SET_UX_VALUE:
            return {
                ...state,
                [action.key]: action.value
            };
        case SET_NAVI_SCRN:
            return {
                ...state,
                navi_scrn: action.value
            };
        default:
            return state;
    }
});


/***/ })

};
;