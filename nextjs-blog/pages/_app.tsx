import "../styles/globals.css";


import React, { useEffect } from "react";
// import "react-vis/dist/style.css";
// import "../styles/global.scss";
// import "../styles/editor.scss";
// import "../styles/quill.snow.css"
// import "../styles/shop.scss"
// import "../styles/rheostat.css"
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/nprogress.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch, useSelector, useStore } from "react-redux";
import socketIOClient from "socket.io-client";
// import config from "../config"
// import { SET_SOCKET_ID } from "../redux/reducers/socket";
// import {PAYMENT_STATUS_SUCCESS , PAYMENT_STATUS_FAILURE } from "../redux/reducers/transaction/paymentStatus";
// import { urlDecodeObj } from "../helpers/urlQuery";
import { SET_AFTER_LOGIN_ACTION } from "../redux/reducers/iam/afterLoginAction";
import { RootState } from "../redux/reducers";
// import cookie from "js-cookie";
import { SET_STORAGE_ITEM } from "../redux/reducers/storage";
import { FETCH_USER } from "../redux/actions/user";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// const { apiUrl } = config;
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);



const WrappedApp = (ctx) => {
  const { Component, pageProps, router } = ctx;
  const store: any = useStore();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.storage.isLoggedIn
  );
  const afterLoginAction = useSelector(
    (state: RootState) => state.afterLoginAction
  );

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (token != null) {
    //   dispatch({ type: SET_STORAGE_ITEM, key: "isLoggedIn", value: true });
    // }
    if (isLoggedIn) {
      dispatch({ type: FETCH_USER });
      if (afterLoginAction !== null) {
        dispatch(afterLoginAction);
      }
    }
  }, [isLoggedIn]);

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

  return (
    <>
      

  
      <PersistGate persistor={store.__persistor} loading={null}>
        <AnimateSharedLayout>
          <Component {...pageProps} key={router.route} />
        </AnimateSharedLayout>
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
