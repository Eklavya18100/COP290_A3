//Written by Eklavya Agarwal

import React, { Component } from "react";
import { useSelector } from "react-redux";
import ProfileIcon from "../../reusable/widgets/ProfileIcon";
import GatewayButtons from "../components/GatewayButtons";
import { RootState } from "../../../redux/reducers";

export default function Gateway() {
  const { isLoggedIn, userName } = useSelector(
    (state: RootState) => state.storage
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5vh",
          paddingTop: "5vh",
        }}
      >
        <ProfileIcon size={"16vh"} errorImage={undefined} />
        <GatewayButtons />
      </div>
    </div>
  );
}
