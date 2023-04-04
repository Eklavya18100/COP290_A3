import React, { useEffect, useState } from "react";
import cookie from 'js-cookie';
//import cookieSetting from "../../../helpers/cookieSetting";
import PopupCss from './cookiePopup.module.css';


function CookiePopup() {
    const [cookiePop, setCookiePop] = useState(false);

    useEffect(() => {
        let butterCookie = cookie.get('myCookie');
        if(butterCookie === undefined){
            setCookiePop(true);
        } else {
            setCookiePop(false);
        }
    }, [])

    function acceptCookies () {
        cookie.set('myCookie', true);
        setCookiePop(false);
    }

    function rejectCookies () {
        cookie.set('myCookie', false);
        setCookiePop(false);
    }

    return (
        <div>
            { cookiePop
                ?
                    <div className={PopupCss.cookieBanner}>
                        <p>By using our website, you agree to our <a href='#'>cookie policy</a></p>
                        <div>
                            <button className={PopupCss.accept} onClick={acceptCookies} >Accept</button>
                            <button className={PopupCss.cancel} onClick={rejectCookies} >Cancel</button>
                        </div>
                    </div>

                : null
            }
        </div>
    );
}


export default CookiePopup;
