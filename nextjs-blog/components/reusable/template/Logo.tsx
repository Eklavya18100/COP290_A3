import React from "react";
export default function Logo({ height }) {
  return (
    <img
      style={{ height: height }}
      alt={"iProtect Logo"}
      src={"/iprotect_logo.png"}
    />
  );
}
