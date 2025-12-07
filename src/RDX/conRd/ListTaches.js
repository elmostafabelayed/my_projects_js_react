import { useSelector } from "react-redux";
import Ctache from "./Ctache";
export default function ListTaches() {
  const taches=useSelector((state) => state.tach.listTach)
  return taches.map((t, i) => (
    <Ctache key={i} props={t}  />
  ));
}
