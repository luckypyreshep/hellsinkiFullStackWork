import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGood = (good) => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handlerBad = (bad) => {
    const newBad = bad + 1;
    setBad(newBad);
  };
  const handlerNeutral = (neutral) => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  return (
    <div>
      <Header title="Give Feedback" />
      <Button label="Good" modify={() => handlerGood(good)} />
      <Button label="Neutral" modify={() => handlerNeutral(neutral)} />
      <Button label="Bad" modify={() => handlerBad(bad)} />
      <Header title="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
