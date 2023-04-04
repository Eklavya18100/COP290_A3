import st from "./nav.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CircleImage from "@components/reusable/widgets/CircleImage";
// import { FETCH_DETAIL_INFO_SUCCESS } from "../../redux/reducers/iam/profile";
import { FETCH_USER } from "../../redux/actions/user.ts";
import Logo from "@components/reusable/template/Logo.tsx";
// import useOutsideDetector from "../../helpers/useOutsideDetector";
import { useRouter } from "next/router";
import avatarSt from "@components/reusable/widgets/CircleImage/circularImage.module.scss";
import {
  modalTypes,
  SET_AUTH_MODAL_PAGE,
  SET_UX_VALUE,
} from "../../redux/reducers/ux.ts";
import classNames from "classnames";
import Region from "../../constants/Region.ts";
import { RootState } from "../../redux/reducers";
import authModalPages from "../../constants/authModalPages";
import styles from "./nav.module.scss";
import { IoHeart } from "@react-icons/all-files/io5/IoHeart";
import { IoIosTime } from "@react-icons/all-files/io/IoIosTime";
import styleLib from "../../constants/styleLib";
import useTranslation from "next-translate/useTranslation";
import { IoMdHeartEmpty } from "@react-icons/all-files/io/IoMdHeartEmpty";
import { IoHeartCircleOutline } from "@react-icons/all-files/io5/IoHeartCircleOutline";

import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";

import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import ProfileModal from "@components/nav/profileModal.tsx";
import setLanguage from "next-translate/setLanguage";
// import Sidebar from "@components/sidebar/sidebar";

const ddOptions = Object.keys(Region).map((k) => Region[k]);

export default function Nav({
  theme = "light",
  noSearch,
  noCreateListing,
  customComponent = null,
  outsideApp = false,
  noFilter,
  noProfile,
  noRegion,
  transparentNav,
  darkBg,
}) {
  let [burgerOpened, setBurgerOpened] = useState(true);

  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const router = useRouter();

  const { isLoggedIn } = useSelector((state: RootState) => state.storage);
  const user = useSelector((state: RootState) => state.profile);

  const [offset, setOffset] = useState(0);

  const featuresItems = [
    {
      title: "product_comparison",
      link: "/product-comparison",
    },
    {
      title: "financial_planning",
      link: "/financial-planning",
    },
    {
      title: "dna_insurfit_solution",
      link: "/dna-insurfit-solution",
    },
  ];

  if (transparentNav) {
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }, []);
  }

  // const userReady = user.readyStatus === FETCH_DETAIL_INFO_SUCCESS;
  const userReady=true;
  const currentState = useSelector(
    (state: RootState) => state.ux.filterMenuActiveOnMobile
  );

  const toggleFilterMenu = () => {
    dispatch({
      type: SET_UX_VALUE,
      key: "filterMenuActiveOnMobile",
      value: !currentState,
    });
  };
  const [regionMenuActive, setRegionMenuActive] = useState(false);

  const dispatch = useDispatch();

  const profileModalActive = useSelector(
    (state: RootState) => state.ux.profileModalActive
  );

  useEffect(() => {
    if (isLoggedIn && !userReady) {
      dispatch({ type: FETCH_USER });
    }
  }, [isLoggedIn]);

  const regionMenuRef = useRef(null);
  // useOutsideDetector(regionMenuRef, () => setRegionMenuActive(false));

  return (
    <React.Fragment>
      {profileModalActive ? <ProfileModal /> : null}
      <div
        style={
          theme === "light"
            ? null
            : {
                backgroundColor: "black",
              }
        }
        onClick={() => {
          if (profileModalActive) {
            dispatch({
              type: SET_UX_VALUE,
              key: "profileModalActive",
              value: false,
            });
          }
        }}
        className={st.topNav}
        data-cy="topNav"
      >
        <div className={st.appNavLeft}>
          <Link href={outsideApp ? "/" : "/app"}>
            <div className={st.appNavHead}>
              <div className={st.logoContainer}>
                <Logo height={"7vh"} />
              </div>
            </div>
          </Link>
          {customComponent}
        </div>

        <div className={st.appNavRow}>
          {outsideApp ? (
            <div className={st.nav}>
              <Link href={"/"} passHref>
                <div className={st.dropbtn}>{t("home")}</div>
              </Link>
              <Link href={"/about"} passHref>
                <div className={st.dropbtn}>{t("about")}</div>
              </Link>
              <div className={st.dropdown}>
                <div className={st.dropbtn}>{t("features")}</div>
                <div className={st.dropdown_content}>
                  {featuresItems.map((item) => (
                    <Link href={item.link}>{t(item.title)}</Link>
                  ))}
                </div>
              </div>
              <Link href={"/contact"} passHref>
                <div className={st.dropbtn}>{t("contact")}</div>
              </Link>
              <Link href={"/app"} passHref>
                <div className={st.dropbtn} style={{ color: "pink" }}>
                  {t("early_access")}
                </div>
              </Link>
              <div className={st.vl}></div>
              <div
                className={st.dropbtnenglish}
                onClick={async () => await setLanguage("en")}
              >
                English
              </div>
              <div
                className={st.dropbtnchinese}
                onClick={async () => await setLanguage("zh")}
              >
                繁體中文
              </div>
            </div>
          ) : null}
          {noProfile ? null : (
            <div className={st.authButtonContainer}>
              {isLoggedIn ? (
                <div>
                  <button
                    className={st.viewInfoTab}
                    onClick={() => router.push("/app/bookmarks")}
                    style={{ cursor: "pointer" }}
                  >
                    <IoHeartCircleOutline color={"#999"} size={32} />
                  </button>
                  <button
                    className={styles.viewInfoTab}
                    onClick={() => router.push("/app/my-history")}
                    style={{ cursor: "pointer" }}
                  >
                    <IoTimeOutline color={"#999"} size={30} />
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: SET_UX_VALUE,
                        key: "profileModalActive",
                        value: true,
                      })
                    }
                    data-cy="account"
                  >
                    <button
                      className={styles.viewInfoTab}
                      style={{ cursor: "pointer" }}
                    >
                      {/* <CircleImage imageUrl={userReady &&"/profilePic.png" }/> */}

                      <IoPersonOutline color={"#999"} size={28} />
                    </button>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() =>
                    dispatch({
                      type: SET_UX_VALUE,
                      key: "authModalPage",
                      value: authModalPages.GATEWAY,
                    })
                  }
                  className={st.signUpButton}
                  data-cy="signup"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                  </svg>
                  <h4> Account</h4>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
