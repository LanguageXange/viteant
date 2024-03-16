import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TestApp from "./TestApp.tsx";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

// SeedToken, MapToken, Alias Token
// https://ant.design/docs/react/customize-theme#seedtoken

// Internationalization
// https://ant.design/docs/react/i18n

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
