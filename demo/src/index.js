import React from "react";
import { render } from "react-dom";

import JustAnotherLoadingIndicator from "just-another-loading-indicator";

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <JustAnotherLoadingIndicator />
  </div>,
  document.getElementById("app")
);
