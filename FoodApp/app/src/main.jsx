import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  
  body{
   
    font-family: 'Inter', sans-serif;
    background-color:#323232;
    min-height: 100vh;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global></Global>
    <App />
  </React.StrictMode>
);