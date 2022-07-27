<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
>>>>>>> f5ad78b22976f4552906df481820e1a57f608396

import Login from "./pages/Login.jsx";
import { SignUp, FirstSignUp, SecondSignUp, ThirdSignUp } from "./pages/SignUp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="*" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
=======
    <BrowserRouter>
      <App />
>>>>>>> f5ad78b22976f4552906df481820e1a57f608396
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
