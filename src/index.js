import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./corr_TP7_RTK/Composants/App";
import App from "./project_2/App";
import { Provider } from "react-redux";
import sotre from "./project_2/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={sotre}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
