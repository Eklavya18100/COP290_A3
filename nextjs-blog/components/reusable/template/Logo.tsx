import React from "react";
export default function Logo({ height }) {
  return (
    <img
      style={{ height: height }}
      alt={"proVis Logo"}
      src={"/navbar/proVis_logo.jpg"}
    />
  );
}
