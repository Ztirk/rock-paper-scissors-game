import { useEffect, useState } from "react";
import Background from "./components/Background";
import Game from "./components/Game";
import Rule from "./components/Rule";
import ScoreBoard from "./components/ScoreBoard";
import Cookies from "js-cookie";

function App() {
  const [score, setScore] = useState<number>(
    Cookies.get("score") ? Number(Cookies.get("score")) : 0
  );

  useEffect(() => {
    Cookies.set("score", score.toString(), { expires: 1 / 24 });
  }, [score]);

  return (
    <Background>
      <ScoreBoard score={score} />
      <Game setScore={setScore} />
      <Rule />
    </Background>
  );
}

export default App;
