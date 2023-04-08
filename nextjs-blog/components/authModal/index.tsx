//*Written by Eklavya Agarwal
//*Date- 04/04/2023
//* Loads all the modals by changing the authModalPage value in reducers-->ux(state)

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authModalPages from "../../constants/authModalPages";
import Gateway from "./steps/Gateway";
import EmailVerification from "./steps/EmailVerification";
import InputCode from "./steps/ResetPassword/InputCode";
// import NewPassword from './steps/ResetPassword/NewPassword';
import AuthSuccess from "./steps/AuthSuccess";
import { RootState } from "../../redux/reducers";
// import SendResetPwMail from './steps/ResetPassword/SendResetPwMail';
import { SET_AUTH_MODAL_PAGE } from "../../redux/reducers/ux";
import ModalTemplate from "@components/reusable/template/ModalTemplate";
import EmailAuth from "./steps/EmailAuth";

export default function AuthModal() {
  const dispatch = useDispatch();
  const authModalPage = useSelector(
    (state: RootState) => state.ux.authModalPage
  );

  const getModalContent = () => {
    switch (authModalPage) {
      case authModalPages.GATEWAY:
        // return <Gateway />;
        return <EmailAuth />;
      case authModalPages.EMAIL_AUTH:
        return <EmailAuth />;
      case authModalPages.EMAIL_VERIFICATION:
        return <EmailVerification />;
      // case authModalPages.SEND_RESET_PASSWORD_MAIL:
      //   return <SendResetPwMail/>
      // case authModalPages.RESET_PASSWORD_INPUT_CODE:
      //   return <InputCode />;
      // case authModalPages.ENTER_NEW_PASSWORD:
      //   return <NewPassword/>
      case authModalPages.SUCCESS:
        return <AuthSuccess />;
      default:
        return null;
    }
  };

  return (
    authModalPage && (
      <ModalTemplate
        onClose={() =>
          dispatch({
            type: SET_AUTH_MODAL_PAGE,
            value: authModalPages.INVALID,
          })
        }
      >
        {getModalContent()}
        
      </ModalTemplate>
    )
  );
}
