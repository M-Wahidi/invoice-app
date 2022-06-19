import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeContext from "./Context/ThemeContext";
import UserContext from "./Context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeContext>
      <UserContext>
        <App />
      </UserContext>
    </ThemeContext>
  </Router>
);
