import React from "react";
import st from "./SocialButton.module.scss";
export default function SocialButton({
  platform,
  textColor,
  onClick,
  backgroundColor,
  iconComponent,
}) {
  return (
    <>
      <div className={`${st.buttonContainer} ${st.raise}`}>
        <button
          style={{ backgroundColor: backgroundColor }}
          className={st.button}
          onClick={onClick}
        >
          <div className={st.buttonIcon}>{iconComponent}</div>
          <div className={st.buttonTextContainer}>
            <h4 style={{ color: textColor, fontWeight: "bold", fontSize: 18 }}>
              Continue with {platform}
            </h4>
          </div>
        </button>
      </div>
    </>
  );
}
