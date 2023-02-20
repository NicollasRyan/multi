import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FormProvider } from "./contexts/FormContext";
import { FormStep1 } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { FormStep3 } from "./pages/FormStep3";

import { GlobalStyle } from "./styles/global";
import { Finished } from "./pages/Finished";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormProvider>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<FormStep1 />} />
            <Route path="/step2" element={<FormStep2 />} />
            <Route path="/step3" element={<FormStep3 />} />
            <Route path="/finished" element={<Finished />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </Router>
    </FormProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
