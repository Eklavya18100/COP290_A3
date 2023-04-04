import React, { useState, useEffect, useCallback } from "react";
import { SET_AUTH_MODAL_PAGE, SET_CAT_ID } from "../../redux/reducers/ux.ts";
import { useSelector, useDispatch } from "react-redux";
// import {FETCH_USER} from '../../redux/actions/user';
import { FETCH_USER_SUCCESS } from "../../redux/reducers/user.ts";
// import { getImg } from "../../helpers/getFile/getImg";
import ProfileIcon from "../reusable/widgets/ProfileIcon";
import useTranslation from "next-translate/useTranslation";
import { MdAddCircle } from "@react-icons/all-files/md/MdAddCircle";
import styles from "./profileModal.module.scss";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import { IoIosTime } from "@react-icons/all-files/io/IoIosTime";
import { IoHeart } from "@react-icons/all-files/io5/IoHeart";
import { IoLogOutOutline } from "@react-icons/all-files/io5/IoLogOutOutline";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { REMOVE_USER_SESSION_MEMORY } from "redux/reducers/storage.ts";
import { SET_UX_VALUE } from "../../redux/reducers/ux.ts";

export default function ProfileModal() {
  const dispatch = useDispatch();
  const setCatId = (v) => dispatch({ type: SET_CAT_ID, value: v });
  const router = useRouter();

  const [tab1, setTab1] = useState(false);

  const userState = useSelector((state: RootState) => state.user);
  const userReadyStatus = userState.readyStatus;
  const userData = userState.data;
  const { accQuota, freeQuota, paidQuota } = userData;

  const storage = useSelector((state: RootState) => state.storage);
  const userName = storage.userName;
  const userID = storage.userID;

  const { t } = useTranslation("common");

  const greetingText = ():string => {
    let text;
    text = userName === null ? `Login` : `${t("welcome")}, ${userName}`;
    return text;
  }

  // useEffect(() => {
  //     if (isLoggedIn) {
  //         dispatch({type: FETCH_USER});
  //     }
  // }, [isLoggedIn]);

  return (
    <>
      <div className={styles.profileModalContainer} >
        <div>
          <div className={styles.userHead}>
            <button
              className={styles.userImgContainer}
              onClick={() => router.push("MyProfile")}
              style={{cursor:'pointer'}}
            >
              <ProfileIcon size={"40px"} borderRadius={"20px"} />
            </button>
            <h4 className={styles.welcome_txt}>{greetingText()} </h4>
            {/* <h4 className={styles.welcome_txt_name}>{userName}</h4> */}
          </div>
          <div className={styles.quota}>
          <h4 className={styles.quotaListTitle}>{t("rem_quotes")}</h4>
          <div className={styles.quotaListContainer} >
            <div className={styles.quotaList} style={{display:'flex',justifyContent:'space-between'}}>
              <button
                className={styles.totalSection}
                onClick={() => router.push("/app/QuotesDetails")}
              >
                <div className={styles.totalSectionTitle}>
                  {userReadyStatus === FETCH_USER_SUCCESS ? (
                    <>
                      <img
                        className={styles.totalSectionTitleImg}
                        // src={getImg("gem")}
                      />
                      <h3>{freeQuota + paidQuota}</h3>
                      <div className={styles.addCircleCont}>
                        <MdAddCircle
                        color={"#e84649"}
                        size={"30px"}
                      />
                      </div>
                    </>
                  ) : null}
                </div>
              </button>
            </div>
          </div>
          </div>
          <button
            className={styles.buttonRow}
            onClick={() => router.push("/app/bookmarks")}
          >
            <IoHeartOutline color={"#777"} size={"30px"} />
            <h4 className={styles.viewInfoTabTxt}>{t("my_bkmark")}</h4>
          </button>
          <button
            className={styles.buttonRow}
            onClick={() => router.push("/app/my-history")}
          >
            <IoTimeOutline color={"#777"} size={"30px"} />
            <h4>{t("his_txt")}</h4>
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
            <h4>{t("logout")}</h4>
          </button>
        </div>
      </div>
    </>
  );
}
