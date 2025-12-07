import { useState } from "react";
import { marques, Ordinateurs, salles } from "./data";
import DropListe from "./DropListe";
import InfoOrdinatuer from "./InfoOrdinatuer";
import FormNew from "./FormNew";

export default function App() {
  const [recherche, setRecherche] = useState([]);
  const [recherchei, setRechercheSelect] = useState([]);
  const [marq, setMarq] = useState("MarqueX");
  const [sall, setSall] = useState("SalleX");
  const [ordinat, setOrdi] = useState(Ordinateurs);

  function handlsub(e) {
    e.preventDefault();
    const res = Ordinateurs.filter(
      (r) => r.Marque === marq && r.Salle === sall
    );
    setRecherche(res);
  }
  function handlcherch(e) {
    const nn = Number(e.target.value);
    const re = Ordinateurs.find((r) => r.Numero === nn);
    setRechercheSelect(re);
  }
  function ajout(num, inti) {
    const d = new Date()
    const newor = {
      Numero: Number(num),
      Marque: marq,
      Intitulé: inti,
      DateAchat: new Date().toLocaleDateString(),
      Salle: sall
    }
    setOrdi([...ordinat, newor ])
  }
  console.log(ordinat);
  return (
    <div className="container p-4">
      <form onSubmit={handlsub}>
        <select onChange={(e) => setMarq(e.target.value)}>
          <DropListe list={marques} />
        </select>

        <select onChange={(e) => setSall(e.target.value)}>
          <DropListe list={salles} />
        </select>
        <input type="submit" value="Recherch" />
      </form>

      <h2>Ordinateur Trouvé</h2>
      <select multiple onChange={handlcherch}>
        {recherche.map((e, i) => (
          <option key={i} value={e.Numero}>
            {e.Intitulé}
          </option>
        ))}
      </select> 
      <div className="text-center">
        <FormNew ajout={ajout}></FormNew>
      </div>
      <h2>Ordinateur Selectionne</h2>
      <InfoOrdinatuer ob={recherchei} />
      
    </div>
  );
}
