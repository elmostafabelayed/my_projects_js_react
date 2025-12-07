import { useDispatch, useSelector } from "react-redux";
import { incrment, decriment, incbysp } from "./counterSlice";

export default function Countre() {
  const count = useSelector((state) => state.counter.comp);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrment())}>Incrment</button>
      <p>cuomp {count}</p>
      <button onClick={() => dispatch(decriment())}>Decriment</button>
      <button onClick={() => dispatch(incbysp(5))}>bystp</button>
    </div>
  );
}
