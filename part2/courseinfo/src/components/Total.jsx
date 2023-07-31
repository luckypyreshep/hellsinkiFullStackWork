const Total = (props) => {
  const { courseParts } = props;

  const total_exercises = courseParts.reduce((sum, coursePart) => {
    return sum + coursePart.exercises;
  }, 0);

  return (
    <div>
      <p>
        <b>Number of exercises {total_exercises}</b>
      </p>
    </div>
  );
};

export default Total;
