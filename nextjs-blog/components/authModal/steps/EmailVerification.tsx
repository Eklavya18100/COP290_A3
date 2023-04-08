//*Written by Eklavya Agarwal

import React, { useState, useEffect } from "react";
import Spinner from "@components/authModal/components/spinner";
import btnStyles from "./AuthSuccess.module.scss";
import { SET_STORAGE_ITEM } from "../../../redux/reducers/storage";
import config from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import readyStatus from "../../../constants/readyStatus";
import { SET_AUTH_MODAL_PAGE } from "../../../redux/reducers/ux";
import authModalPages from "../../../constants/authModalPages";
import ReactCodeInput from "@components/authModal/components/CodeField";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { RootState } from "../../../redux/reducers";

const { apiUrl } = config;

const CELL_COUNT = 6;
const source =
  "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png";
export default function EmailVerification() {
  const [value, setValue] = useState("");
  const registering = false;

  // <-----------------------60s counter for resend email begins---------------------------------------->
  const [counter, setCounter] = React.useState(registering ? 60 : 0);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  // <-----------------------60s counter for resend email ends---------------------------------------->

  const [verifyEmailStatus, setVerifyEmailStatus] = useState(
    readyStatus.INVALID
  );
  const [sendEmailStatus, setSendEmailStatus] = useState(
    registering ? readyStatus.SUCCESS : readyStatus.INVALID
  );

  const [emailSentAtLeastOnce, setEmailSentAtLeastOnce] = useState(registering);
  const emailSent = sendEmailStatus === readyStatus.SUCCESS;
  const sendEmailDisabled =
    counter > 0 || sendEmailStatus === readyStatus.PENDING;
  const verifyEmailPending = verifyEmailStatus === readyStatus.PENDING;

  const userId = useSelector((state: RootState) => state.storage.userID);
  const jwt = useSelector((state: RootState) => state.storage.jwt);
  const dispatch = useDispatch();
  
  // <----------------------sendVerificationMail function hits backend send OTP endpoint begins------------------->
  const sendVerificationMail = async () => {
    setSendEmailStatus(readyStatus.PENDING);
    try {
      // const response = await fetch(`${apiUrl}/send-verification-mail`, {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${jwt}`,
      //   },
      // });
      // const responseJson = await response.json();
      
      // if (responseJson.status < 400) {
        setEmailSentAtLeastOnce(true);
        setSendEmailStatus(readyStatus.SUCCESS);
        setVerifyEmailStatus(readyStatus.INVALID);
      // }
    } catch (err) {
      setEmailSentAtLeastOnce(true);
      setSendEmailStatus(readyStatus.SUCCESS);
      setVerifyEmailStatus(readyStatus.INVALID);
    } finally {
      setCounter(60);
    }
  };
  // <----------------------sendVerificationMail function hits backend send OTP endpoint ends------------------->

  // <-----------------------------verifying the OTP by hitting the backend endpoint begins----------------------->
  const verifyEmail = async () => {
    if (value.length !== 6) {
      return;
    }
    setVerifyEmailStatus(readyStatus.PENDING);
    try {
      const response = await fetch(`${apiUrl}/api/user/verifyEmail`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp: value,
          token: jwt,
        }),
      });
      const responseJson = await response.json();

      if (responseJson.status < 400) {
        

        dispatch({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.SUCCESS });

      } else {
        setValue("");
        setVerifyEmailStatus(readyStatus.FAILURE);
      }
    } catch (err) {
      setVerifyEmailStatus(readyStatus.FAILURE);
    }
  };
  // <-----------------------------verifying the OTP by hitting the backend endpoint ends----------------------->
  return (
    <>
      <div>
        <button
          className={btnStyles.button30}
          onClick={() => {
            dispatch({ type: SET_AUTH_MODAL_PAGE, value: null });
          }}
          role="button"
        >
          <IoClose style={{ fontSize: "4vh", color: "#777" }} />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <div>
          <h4>
            {emailSentAtLeastOnce ? "Verification" : "Verify Account Email"}
          </h4>
        </div>
        <img
          src={source}
          style={{
            borderRadius: "20px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              margin:'2rem'
          }}
        />
        <h4>
          After you verify your account {"\n"}
          You can access to our premium content
        </h4>
        {emailSentAtLeastOnce ? (
          <>
            <ReactCodeInput
              value={value}
              onChange={setValue}
              fields={CELL_COUNT}
              autoFocus={true}
            />
            <button
              disabled={verifyEmailPending}
              className={btnStyles.button30}
              onClick={verifyEmail}
              role="button"
            >
              {" "}
              {verifyEmailPending ? <Spinner /> : <h4>Verify</h4>}
            </button>
            <h4>
              {verifyEmailStatus === readyStatus.FAILURE
                ? "The code is incorrect or expired"
                : ""}
            </h4>

            <button
              className={btnStyles.button30}
              disabled={sendEmailDisabled}
              onClick={sendVerificationMail}
              role="button"
            >
              {(() => {
                if (counter > 0) {
                  return (
                    <h4>
                      {`Cannot receive an email?\nRetry again in ${counter} seconds`}
                    </h4>
                  );
                } else if (sendEmailStatus === readyStatus.PENDING) {
                  return <Spinner />;
                } else {
                  return <h4>Resend Email</h4>;
                }
              })()}
            </button>
          </>
        ) : (
          <button
            className={btnStyles.button30}
            disabled={sendEmailDisabled}
            onClick={sendVerificationMail}
            role="button"
          >
            {sendEmailStatus === readyStatus.PENDING ? (
              <Spinner />
            ) : (
              <h4>Send Verification Email</h4>
            )}
          </button>
        )}
      </div>
    </>
  );
}

export const CELL_SIZE = 42;
export const CELL_BORDER_RADIUS = 8;
