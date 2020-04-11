import React from "react";
import { render } from "react-dom";

import JustAnotherLoadingIndicator from "just-another-loading-indicator";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "98vh",
  background: "lightgray",
};

render(
  <div style={wrapperStyle}>
    <div style={{ height: "2rem", width: "2rem" }}>
      <JustAnotherLoadingIndicator color={"purple"} type={"jumpingdots"} />
    </div>
  </div>,
  document.getElementById("app")
);
