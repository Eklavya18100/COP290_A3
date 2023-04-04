import React, { useEffect, useState } from "react";
import Head from "@components/head/Head";
import Nav from "../../nav/Nav";
// import Sidebar from '@components/sidebar/sidebar';
import st from "./template.module.scss";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import authModalPages from "../../../constants/authModalPages";
// import ErrorBanner from "@components/reusable/template/error/errorBanner";
// import CookiePopup from "./cookiePopup";
import { RootState } from "../../../redux/reducers";
import AuthModel from "@components/authModal";
import { SET_UX_VALUE } from "../../../redux/reducers/ux";

export default function PageTemplate({
  outsideApp = false,
  customComponent = null,
  children = null,
  noBottomNav = false,
  noFooter = false,
  noSearch = false,
  noFilter = false,
  noCreateListing = false,
  noProfile = false,
  dashboard = false,
  noRegion = false,
  transparentNav = false,
  darkBg = false,
  footerBorderTop = false,
  noNav = false,
  theme = "light",
}) {
  //selector check redux if error 404 or 500
  // const modalActive = useSelector(
  //   (state: RootState) =>
  //     state.ux.filterMenuActiveOnMobile ||
  //     state.ux.authModalPage !== authModalPages.INVALID ||
  //     state.ux.updateFormPage >= 0
  // );

  const authModalPage = useSelector(
    (state: RootState) => state.ux.authModalPage
  );

  const overlayActive: boolean = useSelector(
    (state: RootState) => state.ux.profileModalActive
  );
  const dispatch=useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  // useEffect(() => {
  //   if (modalActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [modalActive]);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  const getContent = () => {
    if (dashboard) {
      return (
        <div className={st.dashboardPage}>
          <div className={st.dashboardPageContent}>{children}</div>
        </div>
      );
    } else {
      return <>{children}</>;
    }
  };

  return (
    <div className={st.body}>
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
          font-family: "Inter", sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          //border: 1px solid black;
        }
        @media only screen and (max-width: 600px) {
          body > div {
            overflow-x: hidden;
            overflow-y: auto;
          }
        }
      `}</style>
      <Head />
      <main className={st.app}>
        {overlayActive ? (
          <div
            onClick={() => {
              dispatch({
                type: SET_UX_VALUE,
                key: "profileModalActive",
                value: false,
              });
            }}
            className={st.globalOverlay}
          />
        ) : null}
       
        <Nav
          theme={theme}
          outsideApp={outsideApp}
          customComponent={customComponent}
          noSearch={noSearch}
          noFilter={noFilter}
          noCreateListing={noCreateListing}
          noProfile={noProfile}
          noRegion={noRegion}
          transparentNav={transparentNav}
          darkBg={darkBg}
        />
        {noNav || transparentNav ? null : <div className={st.navPadding} />}
        {getContent()}
        {authModalPage !== authModalPages.INVALID ? <AuthModel /> : null}
      </main>
      {/* { noBottomNav ?  null : <BottomNav/> } */}
      {noFooter ? null : <Footer footerBorderTop={footerBorderTop} />}
   
    </div>
  );
}
