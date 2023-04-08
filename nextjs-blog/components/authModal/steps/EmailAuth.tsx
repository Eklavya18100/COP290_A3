//*Written by Eklavya Agarwal

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUTH_MODAL_PAGE } from "../../../redux/reducers/ux";
import authModalPages from "../../../constants/authModalPages";
import { SET_STORAGE_ITEM } from "../../../redux/reducers/storage";
import Spinner from "@components/authModal/components/spinner";
import st from "./EmailAuth.module.scss";
import styles from "./TempStyles.module.scss";
import config from "config";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function EmailAuth() {
  const { apiUrl } = config;

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // <------------------save all account info after making requests to the backend API begins----------------->
  const saveAccountInfo = (responseJson, loginType) => {
    setEmail("");
    setPassword("");
    setLoading(false);

    const userInfo = responseJson.info;
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "jwt",
      value: responseJson.token,
    });
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "userID",
      value: userInfo.cus_uid,
    });
    dispatch({ type: SET_STORAGE_ITEM, key: "userType", value: "customer" });
    dispatch({ type: SET_STORAGE_ITEM, key: "isLoggedIn", value: true });
    dispatch({ type: SET_STORAGE_ITEM, key: "loginType", value: loginType });
    dispatch({
      type: SET_STORAGE_ITEM,
      key: "userName",
      value: userInfo.username,
    });
    setLoading(false);
    localStorage.setItem("token", responseJson.token);

    dispatch({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.SUCCESS });
  };
  // <------------------save all account info after making requests to the backend API ends----------------->\

  // <-----------registering the details on clicking the sign up button begins---------------->
  const emailRegister = async () => {
    setLoading(true);
    if (email === "" || password === "" || rePassword === "") {
      alert("register_warn_1");
    } else if (reg.test(email) === false) {
      alert("login_warn_2");
    } else if (password.length < 4) {
      alert("register_warn_3");
    } else if (password !== rePassword) {
      alert("register_warn_4");
    } else {
      // const name = email.replace(/@.*$/, "");
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/user/emailRegister`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email_id: email,
            password: password,
          }),
        });

        const responseJson = await response.json();

        setLoading(false);

        if (responseJson.status < 400) {
          const userInfo = responseJson.info;
        dispatch({
          type: SET_STORAGE_ITEM,
          key: "jwt",
          value: responseJson.token,
        });
        dispatch({
          type: SET_STORAGE_ITEM,
          key: "userID",
          value: userInfo.cus_uid,
        });
        dispatch({
          type: SET_STORAGE_ITEM,
          key: "userType",
          value: "customer",
        });
        dispatch({ type: SET_STORAGE_ITEM, key: "isLoggedIn", value: true });
        dispatch({
          type: SET_STORAGE_ITEM,
          key: "loginType",
          value: "email",
        });
        dispatch({
          type: SET_STORAGE_ITEM,
          key: "userName",
          value: userInfo.username,
        });
        localStorage.setItem("token", responseJson.token);
          dispatch({
            type: SET_AUTH_MODAL_PAGE,
            value: authModalPages.EMAIL_VERIFICATION,
          });
        } else {
          
            alert("user exists");
          
      }} catch (error) {
        alert(error);
      }
    }
    setLoading(false);
  };
  // <-----------registering the details on clicking the sign up button ends------------------>

  // <-------------------------Login the user--------------------------------------------------------->
  const emailLogin = async ({
    saveAccountInfo,
    setLoading,
    email,
    password,
  }) => {
    // const {t} = useTranslation('login');
    setLoading(true);
    if (email === "" || password === "") {
      alert("Please enter your details");
      setLoading(false);
    } else if (reg.test(email.trim()) === false) {
      alert("Email is not properly formed");
      setLoading(false);
    } else {
      try {
        console.log(`${apiUrl}/api/user/emailLogin`);
        const response = await fetch(`${apiUrl}/api/user/emailLogin`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email_id": email,
            "password": password,
          }),
        });
        const responseJson = await response.json();

        if (responseJson.status < 400) {
          saveAccountInfo(responseJson, "email");
        } else {
          alert(" Please enter valid credentials");
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
  };
  // <--------------------------------------------Login ends------------------------------------------->
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={st.EmailAuth}>
      {loading && <Spinner />}
      <section className={styles.formsSection}>
        <div className={styles.forms}>
          <div
            className={`${styles.formWrapper} ${show ? "" : styles.isActive}`}
          >
            <button
              type="button"
              className={`${styles.switcher} ${styles.switcherLogin}`}
              onClick={() => setShow(!show)}
            >
              Login
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.formLogin}`}>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className={styles.inputBlock}>
                  <label htmlFor="loginEmail">E-mail</label>
                  <input
                    id="loginEmail"
                    type="email"
                    required
                    placeholder={"Enter email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    id="loginPassword"
                    type="password"
                    required
                    placeholder={"Enter password"}
                    value={password}
                    autoCapitalize="none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={st.ForgetPassword}>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      // dispatch({
                      //   type: SET_AUTH_MODAL_PAGE,
                      //   value: authModalPages.SEND_RESET_PASSWORD_MAIL,
                      // });
                    }}
                  >
                    <h4
                      style={{
                        color: isHovering ? "salmon" : "",
                        transform: isHovering ? "scale(1.1)" : "",
                        transition: "all 0.3s",
                        marginRight: "1rem",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Forgot Password ?
                    </h4>
                  </button>
                </div>
              </fieldset>

              {!show && (
                <button
                  className={styles.button33}
                  role="button"
                  onClick={async () => {
                    await emailLogin({
                      saveAccountInfo,
                      setLoading,
                      email,
                      password,
                    });
                  }}
                >
                  Login
                </button>
              )}
            </form>
          </div>
          <div
            className={`${styles.formWrapper} ${show ? styles.isActive : ""}`}
          >
            <button
              type="button"
              onClick={() => setShow(!show)}
              className={`${styles.switcher} ${styles.switcherSignup}`}
            >
              Sign Up
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.formSignup}`}>
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className={styles.inputBlock}>
                  <label htmlFor="signupEmail">Username</label>
                  <input
                    id="signupusername"
                    type="text"
                    required
                    placeholder={"Enter username"}
                    autoCapitalize="none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="signupEmail">E-mail</label>
                  <input
                    id="signupEmail"
                    type="email"
                    required
                    placeholder={"Enter email"}
                    autoCapitalize="none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="signupPassword">Password</label>
                  <input
                    id="signupPassword"
                    required
                    placeholder={"Enter password"}
                    type="password"
                    autoCapitalize="none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <label htmlFor="signupPasswordConfirm">
                    Confirm password
                  </label>
                  <input
                    id="signupPasswordConfirm"
                    required
                    placeholder={"Re-enter password"}
                    autoCapitalize="none"
                    type="password"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
              </fieldset>
              {show && (
                <button
                  className={styles.button33}
                  role="button"
                  onClick={emailRegister}
                >
                  Sign-Up
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
