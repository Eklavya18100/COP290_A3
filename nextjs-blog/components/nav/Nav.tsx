import st from "./nav.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USER } from "../../redux/actions/user";
import Logo from "@components/reusable/template/Logo";
import { useRouter } from "next/router";
import { SET_UX_VALUE } from "../../redux/reducers/ux";
import { RootState } from "../../redux/reducers";
import authModalPages from "../../constants/authModalPages";
import styles from "./nav.module.scss";
import { IoHeartCircleOutline } from "@react-icons/all-files/io5/IoHeartCircleOutline";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import ProfileModal from "@components/nav/profileModal";

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
  const router = useRouter();
  const { isLoggedIn } = useSelector((state: RootState) => state.storage);
  const userReady = false;
  const dispatch = useDispatch();

  const profileModalActive = useSelector(
    (state: RootState) => state.ux.profileModalActive
  );

  useEffect(() => {
    if (isLoggedIn && !userReady) {
      // dispatch({ type: FETCH_USER });//!fix it. Make a call function here
    }
  }, [isLoggedIn]);

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
               
                <div className={st.dropbtn}> <p className={st.navText}>{"Home"}</p></div>
              </Link>
              <Link href={"/about"} passHref>
                <div className={st.dropbtn}><p className={st.navText}>{"About Us"}</p></div>
              </Link>

              <Link href={"/contact"} passHref>
                <div className={st.dropbtn}><p className={st.navText}>{"Contact Us"}</p></div>
              </Link>
              <Link href={"/listing_pg"} passHref>
                <div className={st.dropbtn}><p className={st.navText}>{"Search page"}</p></div>
              </Link>
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
      {/* <header>
            <nav className="navbar">
                
                <img src = {logo} className="nav--img1" /> 
                <div className="nav--text">proVis</div>
                <img src = {search} className="nav--img2" /> 
                <img src = {user_icon}  className="nav--img3" /> 
                <h3 >
                    <ul className="nav--list">
                        <li className="login">Log In</li>
                        <li className="signup">Sign Up</li>
                        <li className="about-us">About Us</li>
                    </ul>
                </h3>
            </nav>
            
            

        </header> */}
    </React.Fragment>
  );
}
