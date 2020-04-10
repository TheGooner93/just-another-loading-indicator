import React from "react";
import { render } from "react-dom";

import JustAnotherLoadingIndicator from "just-another-loading-indicator";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "lightgray",
};

render(
  <div style={wrapperStyle}>
    <div style={{ height: "3rem", width: "3rem" }}>
      <JustAnotherLoadingIndicator color={"purple"} type={"jumpingdots"} />
    </div>
  </div>,
  document.getElementById("app")
);
