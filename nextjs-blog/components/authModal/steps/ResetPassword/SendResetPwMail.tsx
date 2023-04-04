//*Written by Eklavya Agarwal
//*

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { SEND_RESET_PW_MAIL_SUCCESS } from "../../../../redux/reducers/iam/sendResetPwMail";
import { SEND_RESET_PW_MAIL } from "../../../../redux/actions/iam/resetPassword";
import { SEND_RESET_PW_MAIL_REQUESTING } from "../../../../redux/reducers/iam/sendResetPwMail";
import ResetPasswordTemplate from "./template";
import useTranslation from "next-translate/useTranslation";
import Spinner from "@components/authModal/components/spinner";
import { RootState } from "../../../../redux/reducers";
import { SET_AUTH_MODAL_PAGE } from "../../../../redux/reducers/ux";
import { SEND_RESET_PW_MAIL_FAILURE } from "../../../../redux/reducers/iam/sendResetPwMail";
import authModalPages from "../../../../constants/authModalPages";
import config from "config";
import btnStyles from '../AuthSuccess.module.scss';
import styles from '../TempStyles.module.scss';

function SendResetPwMail() {
  const { apiUrl } = config;
  const dispatch = useDispatch();
  const sendEmailState = useSelector(
    (state: RootState) => state.sendResetPwMail
  );

  const sendEmailReadyStatus = sendEmailState.readyStatus;
  const sendEmailDisabled =
    sendEmailReadyStatus === SEND_RESET_PW_MAIL_REQUESTING;
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const readyStatus = useSelector(
    (state: RootState) => state.sendResetPwMail.readyStatus
  );
  const { t } = useTranslation("login");

  const sendResetPwMail = async () => {
    if (readyStatus === SEND_RESET_PW_MAIL_REQUESTING) return;
    dispatch({ type: SEND_RESET_PW_MAIL_REQUESTING, email: email });

    try {
      const response = await fetch(`${apiUrl}/send-reset-password-mail`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const responseJson = await response.json();

      if (responseJson.status < 400) {
        dispatch({
          type: SEND_RESET_PW_MAIL_SUCCESS,
          data: responseJson.data.email,
        });
        dispatch({
          type: SET_AUTH_MODAL_PAGE,
          value: authModalPages.RESET_PASSWORD_INPUT_CODE,
        });
      }
    } catch (err) {
      alert("some error in pass change");
      dispatch({ type: SEND_RESET_PW_MAIL_FAILURE, err: err });
    }
  };

  return (
    <ResetPasswordTemplate>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // border:'2px solid black',
          width:'35%'
        }}
      >
        <div >
          <IoMail color={"#aaa"} size={36} />
        </div>
       
        <div className={styles.inputBlock}>
                  
                  <input
                    id="loginEmail"
                    type="email"
                    required
                    placeholder={t("login_input_1")}
                    value={email}
                    autoCapitalize="none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
      </div>
     
      <button
        className={btnStyles.button30}
        disabled={sendEmailDisabled}
        onClick={sendResetPwMail}
        role="button"
      >
        {sendEmailReadyStatus === SEND_RESET_PW_MAIL_REQUESTING ? (
          <Spinner />
        ) : (
          <h4>Send Mail</h4>
        )}
      </button>
    </ResetPasswordTemplate>
  );
}

export default SendResetPwMail;
