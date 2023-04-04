import React from "react";
import {  SET_UX_VALUE } from "../../redux/reducers/ux";
import { useSelector, useDispatch } from "react-redux";

import styles from "./profileModal.module.scss";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import { IoLogOutOutline } from "@react-icons/all-files/io5/IoLogOutOutline";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { REMOVE_USER_SESSION_MEMORY } from "redux/reducers/storage";

export default function ProfileModal() {
  const dispatch = useDispatch();
  const router = useRouter();

  const userState = useSelector((state: RootState) => state.user);

  const storage = useSelector((state: RootState) => state.storage);
  const userName = storage.userName;

  const greetingText = (): string => {
    let text = userName === null ? `Login` : `${"Welcome"}, ${userName}`;
    return text;
  };

  return (
    <>
      <div className={styles.profileModalContainer}>
        <div>
          <div className={styles.userHead}>
            <button
              className={styles.userImgContainer}
              onClick={() => router.push("MyProfile")}
              style={{ cursor: "pointer" }}
            ></button>
            <h4 className={styles.welcome_txt}>{greetingText()} </h4>
          </div>
          <button
            className={styles.buttonRow}
            onClick={() => router.push("/app/bookmarks")}
          >
            <IoHeartOutline color={"#777"} size={"30px"} />
            <h4 className={styles.viewInfoTabTxt}>{"Bookmarks"}</h4>
          </button>

          <button
            className={styles.buttonRow}
            // onClick={() => router.push('/app/my-history')}
            onClick={() => {
              dispatch({ type: REMOVE_USER_SESSION_MEMORY });
              dispatch({
                type: SET_UX_VALUE,
                key: "profileModalActive",
                value: false,
              });
              router.push("/");
            }}
          >
            <IoLogOutOutline color={"#777"} size={"30px"} />
            <h4>{"Sign out"}</h4>
          </button>
        </div>
      </div>
    </>
  );
}
