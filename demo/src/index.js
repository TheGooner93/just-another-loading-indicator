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
    <div style={{ display: 'flex', justifyContent : 'center', alignItems:'center', height: "50%", width: "50%" }}>
      <JustAnotherLoadingIndicator color={"purple"} type={"jumpingdots"} height={20} width={20}/>
    </div>
  </div>,
  document.getElementById("app")
);
