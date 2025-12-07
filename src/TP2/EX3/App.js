import { Employe, projets, Taches, types } from './data';
import ListDR from './ddr';
import Infoo from './info';
import Tableau from './Tableau';

export default function App() {
  return (
    <div className="container mt-4 p-4 shadow rounded bg-light">
      <h2 className="text-center mb-4 text-primary fw-bold">Gestion des Tâches</h2>

      <Infoo nom={'MHAMADI HSAAN'} code={Taches[0].Code} />

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <ListDR elements={types} texte={'Type'} />
        </div>
        <div className="col-md-4">
          <ListDR elements={Employe} texte={'Employé'} />
        </div>
        <div className="col-md-4">
          <ListDR elements={projets} texte={'Projet'} />
        </div>
      </div>

      <Tableau />
    </div>
  );
}
