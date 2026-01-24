import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./corr_TP7_RTK/Composants/App";
import App from "./notes_app/App"
import Navbar from "./Thunk_Tp/composon/Navbar";
import { Provider } from "react-redux";
import sotre from "./notes_app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={sotre}>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
);
