//*Written by Eklavya Agarwal

import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileIcon from "../../reusable/widgets/ProfileIcon";
import { SET_AUTH_MODAL_PAGE } from "../../../redux/reducers/ux";
import { RootState } from "../../../redux/reducers";
import router from "next/router";
import styles from "./AuthSuccess.module.scss";
import authModalPages from "constants/authModalPages";

export default function AuthSuccess() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ margin: "2rem" }}>{/* <ProfileIcon size={'16vh'}/> */}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h4>Welcome to iProtect.</h4>
        <h2>You can now view and bookmark insurance quotations.</h2>

        <button
          className={styles.button30}
          onClick={() => {
            router.push("/");
            dispatch({
              type: SET_AUTH_MODAL_PAGE,
              value: authModalPages.INVALID,
            });
          }}
          role="button"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
