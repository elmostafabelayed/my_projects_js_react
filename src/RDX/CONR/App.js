import { Provider } from "react-redux";
import Store from "./Store";
import Countre from "./counter";


export default function App(){
    return (<Provider store={Store}>
        <Countre></Countre>
    </Provider>

    )
}