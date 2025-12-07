import Ctache from "./Ctache";
export default function ListTaches({ Suprim, listhhh, taches }) {
  return taches.map((t, i) => (
    <Ctache key={i} props={t} Suprim={Suprim} listhhh={listhhh} />
  ));
}
