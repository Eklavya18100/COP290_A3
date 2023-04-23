//*Written by Eklavya Agarwal
//*

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResetPasswordTemplate from "./template";
import config from "config";
import readyStatus from "../../../../constants/readyStatus";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { RootState } from "../../../../redux/reducers";
import useTranslation from "next-translate/useTranslation";
import { RESET_PW } from "../../../../redux/actions/iam/resetPassword";
import Spinner from "@components/authModal/components/spinner";
import {
  RESET_PW_REQUESTING,
  RESET_PW_SUCCESS,
  RESET_PW_FAILURE,
} from "redux/reducers/iam/resetPw";
import Router from "next/router";
import btnStyles from "../AuthSuccess.module.scss";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState(readyStatus.INVALID);
  const { apiUrl } = config;
  const userId = useSelector((state: RootState) => state.storage.userID);
  const readyStatuss = useSelector(
    (state: RootState) => state.resetPw.readyStatus
  );
  const submitDisabled = status === readyStatus.PENDING;

  const { t } = useTranslation("login");

  const dispatch = useDispatch();
  const jwt = useSelector((state: RootState) => state.storage.jwt);

  const onSubmitNewPassword = async () => {
    if (readyStatuss === RESET_PW_REQUESTING) return;
    dispatch({ type: RESET_PW_REQUESTING });
    try {
      // const res = yield call(iamAPI.newPassword, data);
      const response = await fetch(`${apiUrl}/new-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      });
      const responseJson = await response.json();
      if (responseJson.status < 400) {
        dispatch({ type: RESET_PW_SUCCESS, data: responseJson.data });
        Router.push("/app");
      }
    } catch (err) {
      alert("Retry! Some error occured.");
      dispatch({ type: RESET_PW_FAILURE, err: err });
    }
  };

  return (
    <ResetPasswordTemplate>
      <div>
        <div>
          <IoMail color={"#aaa"} size={36} />
        </div>
        <div>
          <input
            placeholder="Enter new password"
            value={newPassword}
            autoCapitalize="none"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        className={btnStyles.button30}
        disabled={submitDisabled}
        onClick={onSubmitNewPassword}
        role="button"
      >
        {status === readyStatus.PENDING ? (
          <Spinner />
        ) : (
          <h4>Set New Password</h4>
        )}
      </button>
    </ResetPasswordTemplate>
  );
}
