import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const defaultVotes = () => {
    let defaultVotesDict = {};

    // _element is a placeholder for the parameter, element is unused
    anecdotes.forEach((_element, index) => (defaultVotesDict[index] = 0));
    return defaultVotesDict;
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(defaultVotes);

  const voteForAnecdote = () => {
    let newVotesDict = { ...votes };
    newVotesDict[selected] = newVotesDict[selected] + 1;
    setVotes(newVotesDict);
  };

  const generateAnecdote = () => {
    const anecdotesLength = anecdotes.length;
    const randomInteger = Math.floor(Math.random() * anecdotesLength);
    setSelected(randomInteger);
  };

  return (
    <div className="container">
      <div className="anecdotes">{anecdotes[selected]}</div>
      <div className="buttonMenu">
        <div>
          <div className="votes">has {votes[selected]} votes</div>

          <Button text="Vote" handleClick={voteForAnecdote} />
          <Button text="generate an anecdote" handleClick={generateAnecdote} />
        </div>
      </div>
    </div>
  );
};

export default App;
