import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./corr_TP7_RTK/Composants/App";
import Navbar from "./Thunk_Tp/composon/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
