import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import ComponentStudy from "./pages/ComponentStudy/ComponentStudy";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const { a, b, c } = {
//     a: 10,
//     b: 20,
//     c: 30,
// };

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // <ComponentStudy a={a} b={b} c={c} />
);

reportWebVitals();
