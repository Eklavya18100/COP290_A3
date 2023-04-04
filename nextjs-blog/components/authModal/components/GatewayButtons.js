import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { IoLogoFacebook } from "@react-icons/all-files/io5/IoLogoFacebook";
import { IoLogoApple } from "@react-icons/all-files/io5/IoLogoApple";
import styleLib from "../../../constants/styleLib";
import SocialButton from "./SocialButton";
import { SET_AUTH_MODAL_PAGE } from "../../../redux/reducers/ux";
import authModalPages from "../../../constants/authModalPages";
import Spinner from "@components/authModal/components/spinner";

export default function GatewayButtons() {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {loading && <Spinner />}
      <div>

        <SocialButton
          platform={"Apple"}
          onClick={() => {}}
          textColor={"#fff"}
          backgroundColor={"#000"}
          iconComponent={<IoLogoApple size={32} color="#fff" />}
        />

        <GoogleLogin
          clientId="230159075633-rmo8g3ugvqosdgpfshr4inndoajvheu5.apps.googleusercontent.com"//!fix it
          render={(renderProps) => (
            <SocialButton
              onClick={()=>{}}
              platform={"Google"}
              textColor={"#777"}
              backgroundColor={"#fff"}
              iconComponent={
                <img
                  style={{ height: 32, width: 32 }}
                  src="/login/google.png"
                />
              }
            />
          )}
          buttonText="Continue with Google"
          onSuccess={(googleData) =>
            googleLogin({ googleData, saveAccountInfo, setLoading })
          }
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>

        <SocialButton
          platform={"Email"}
          onClick={() => {
            dispatch({
              type: SET_AUTH_MODAL_PAGE,
              value: authModalPages.EMAIL_AUTH,
            });
          }}
          textColor={"#fff"}
          backgroundColor={styleLib.SHARP}
          iconComponent={<IoMail size={38} color="#fff" />}
        />
        
        <FacebookLogin
          appId="562972718562118"//!fix it
          autoLoad={false}
          callback={(res) => facebookAuth(res)}
          isMobile={false}
          render={renderProps => (
            <SocialButton
              platform={"Facebook"}
              onClick={()=>{}}
              textColor={"#fff"}
              backgroundColor={"#4267B2"}
              iconComponent={<IoLogoFacebook size={38} color="#fff" />}
            />
          )}
        />
      </div>
    </>
  );
}