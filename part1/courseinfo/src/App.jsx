import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      part: "Fundamentals of React",
      exercises: 10,
      id: self.crypto.randomUUID(),
    },
    {
      part: "Using props to pass data",
      exercises: 7,
      id: self.crypto.randomUUID(),
    },
    {
      part: "State of a component",
      exercises: 14,
      id: self.crypto.randomUUID(),
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
