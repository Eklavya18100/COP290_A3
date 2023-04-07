import apiEngine from './apiEngine';
import {GET, POST} from './methods';


const apiUrl = process.env.NEXT_PUBLIC_DEV_API_URL;
console.log(apiUrl);
export default {
  emailLogin: (data) => apiEngine(POST,
      `${apiUrl}/email-login`, data),
  emailRegister: (data) => apiEngine(POST,
      `${apiUrl}/email-register`, data),
  sendResetPwMail: data =>  apiEngine(POST,
    `${apiUrl}/send-reset-password-mail`,
    { data: data }),
  codeLogin: (data) =>  apiEngine(POST,
    `${apiUrl}/code-login`,
    { data: data }),
  newPassword: (data) =>apiEngine(POST,
    `${apiUrl}/new-password`,
    { data: data }),
  verifyMail: (data) =>apiEngine(POST,
      `${apiUrl}/verify-email`,
      { data: data }),
  sendVerifyMail: (data) => apiEngine(GET,
      `${apiUrl}/send-verification-mail`),
}
