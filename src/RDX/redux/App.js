import { Provider } from "react-redux";
import { store } from "./Store";
import Compteur from "./Compteur";
export default function App() {
  return <div>
    <Provider store={store}>
    <Compteur></Compteur>
    </Provider>
  </div>;
}
