//*Written by Eklavya Agarwal
//*

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import readyStatus from "../../../../constants/readyStatus";
import { SEND_RESET_PW_MAIL_REQUESTING } from "../../../../redux/reducers/iam/sendResetPwMail";
import {
  CODE_LOGIN,
  SEND_RESET_PW_MAIL,
} from "../../../../redux/actions/iam/resetPassword";
import {
  CODE_LOGIN_FAILURE,
  CODE_LOGIN_REQUESTING,
} from "../../../../redux/reducers/iam/codeLogin";
import ResetPasswordTemplate from "./template";
import ReactCodeInput from "@components/authModal/components/CodeField";
import Spinner from "@components/authModal/components/spinner";
import { RootState } from "../../../../redux/reducers";
import { CODE_LOGIN_SUCCESS } from "../../../../redux/reducers/iam/codeLogin";
import { SET_AUTH_MODAL_PAGE } from "redux/reducers/ux";
import authModalPages from "constants/authModalPages";
import { SET_STORAGE_ITEM } from "redux/reducers/storage";
import config from "config";
import btnStyles from "../AuthSuccess.module.scss";
const CELL_COUNT = 6;
export default function InputCode() {
  const sendEmailState = useSelector(
    (state: RootState) => state.sendResetPwMail
  );
  const sendEmailReadyStatus = sendEmailState.readyStatus;
  const sendEmailDisabled =
    sendEmailReadyStatus === SEND_RESET_PW_MAIL_REQUESTING;
  const codeLoginState = useSelector((state: RootState) => state.codeLogin);
  const codeLoginReadyStatus = codeLoginState.readyStatus;
  const codeLoginPending = codeLoginReadyStatus === CODE_LOGIN_REQUESTING;
  const [value, setValue] = useState("");
  const { apiUrl } = config;
  const dispatch = useDispatch();
  const readyStatus = useSelector(
    (state: RootState) => state.codeLogin.readyStatus
  );
  const email = useSelector((state: RootState) => state.sendResetPwMail.email);

  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const saveAccountInfo = (responseJson) => {
    const userInfo = responseJson.data.info;
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "jwt",
      value: responseJson.data.token,
    });
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "userID",
      value: userInfo.cus_uid,
    });
    dispatch({ type: SET_STORAGE_ITEM, key: "userType", value: "customer" });
    dispatch({ type: SET_STORAGE_ITEM, key: "isLoggedIn", value: true });
    dispatch({ type: SET_STORAGE_ITEM, key: "loginType", value: "email" });
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "userName",
      value: userInfo.username,
    });
    // setLoading(false);
    localStorage.setItem("token", responseJson.data.token);
    // if(route.name === 'FooterTab'){
    // dispatch({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.SUCCESS })
    //   dispatch({ type: SET_NAVI_SCRN, value: tabNames.HOME })

    //   dispatch({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.SUCCESS })
  };
  const onSubmitCode = async () => {
    if (value.length !== 6) {
      return;
    }

    if (readyStatus === CODE_LOGIN_REQUESTING) return;
    dispatch({ type: CODE_LOGIN_REQUESTING });
    try {
      const response = await fetch(`${apiUrl}/code-login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: value,
          email: email,
        }),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch({ type: CODE_LOGIN_SUCCESS, data: responseJson.data });
      saveAccountInfo(responseJson);
      dispatch({
        type: SET_AUTH_MODAL_PAGE,
        value: authModalPages.ENTER_NEW_PASSWORD,
      });
    } catch (err) {
      dispatch({ type: CODE_LOGIN_FAILURE, err: err });
    }
  };

  const sendVerificationMail = async () => {
    if (value.length !== 6) {
      return;
    }
    dispatch({
      type: SEND_RESET_PW_MAIL,
      data: {
        token: value,
        email: sendEmailState.email,
      },
    });
  };

  return (
    <ResetPasswordTemplate>
      <ReactCodeInput value={value} onChange={setValue} fields={CELL_COUNT} />

      <button
        className={btnStyles.button30}
        disabled={codeLoginPending}
        onClick={onSubmitCode}
        role="button"
      >
        {codeLoginPending ? <Spinner /> : <h4>Verify</h4>}
      </button>
      <h4>
        {codeLoginReadyStatus === CODE_LOGIN_FAILURE
          ? "The code is incorrect or expired"
          : ""}
      </h4>
     
      <button
        className={btnStyles.button30}
        disabled={sendEmailDisabled} onClick={sendVerificationMail}
        role="button"
      >
        {(() => {
          if (counter > 0) {
            return (
              <h4>
                {`Cannot receive an email?\nRetry again in ${counter} seconds`}
              </h4>
            );
          } else if (sendEmailReadyStatus === SEND_RESET_PW_MAIL_REQUESTING) {
            return <Spinner />;
          } else {
            return <h4>Resend Email</h4>;
          }
        })()}
      </button>
    </ResetPasswordTemplate>
  );
}
