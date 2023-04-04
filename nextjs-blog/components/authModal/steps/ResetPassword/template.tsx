//*Written by Eklavya Agarwal
//*
//*Template used in a few Auth Modals.

import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  SEND_RESET_PW_MAIL_INVALID,
  SEND_RESET_PW_MAIL_REQUESTING,
  SEND_RESET_PW_MAIL_SUCCESS,
} from '../../../../redux/reducers/iam/sendResetPwMail';
import {RootState} from '../../../../redux/reducers';

const source = 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png'

export const pages = {
  INPUT_CODE: 'INPUT_CODE',
  SEND_MAIL: 'SEND_MAIL',
  NEW_PASSWORD: 'NEW_PASSWORD'
}


export default function ResetPasswordTemplate({ children }){
  const [page, setPage] = useState(pages.SEND_MAIL)
  const [ userId, setUserId ] = useState(null)

  const sendEmailState = useSelector((state: RootState) => state.sendResetPwMail)
  const sendEmailReadyStatus = sendEmailState.readyStatus
  // useEffect(() => {
  //   dispatch({ type: SEND_RESET_PW_MAIL_INVALID })
  // }, [] )
  useEffect(() => {
    if(sendEmailReadyStatus === SEND_RESET_PW_MAIL_SUCCESS){
      setPage(pages.INPUT_CODE)
    }
  }, [sendEmailReadyStatus] )

  const dispatch = useDispatch();

  return (
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <div>
            <h4>
              Reset Password
            </h4>
          </div>
          <img src={source} style={{borderRadius:'20px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
          <h4>
          
          </h4>
          {children}
      </div>
  );
};
