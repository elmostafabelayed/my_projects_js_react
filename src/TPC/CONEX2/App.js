import { questions } from "./data";
import Entete from "./entete";
import Question from "./Question";

export default function App() {
  return (
    <div className="container">
      <Entete title={"Quiz de Math"} />
      {questions.map((q, i) => (
        <Question key={i} question={q} />
      ))}
    </div>
  );
}
