import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ListeRecettes from "./components/ListeRecettes";
import DetailsRecette from "./components/DetailsRecette";

export default function App(){
    return <div>
        <Header></Header>
        <Routes>
            <Route path="/recette/:id" element={<DetailsRecette></DetailsRecette>}></Route>
            <Route path="/" element={<ListeRecettes></ListeRecettes>}></Route>
        </Routes>
        

    </div>
}