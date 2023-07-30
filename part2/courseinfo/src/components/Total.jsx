const Total = (props) => {
  const { parts } = props;

  const total_exercises = parts.reduce((acc, currentPart) => {
    return acc + currentPart.exercises;
  }, 0);

  return (
    <div>
      <p>Number of exercises {total_exercises}</p>
    </div>
  );
};

export default Total;
