import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, bad, neutral }) => {
  const add = (acc, a) => {
    return acc + a;
  };
  const total = [good, neutral, bad].reduce(add, 0);
  const positive = Math.round((good / total) * 100) + "%";
  const average = Math.round((total / 3) * 100) / 100;

  if (total === 0) {
    return <h3>No feedback given</h3>;
  } else {
    return (
      <div>
        <table>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Average" value={average} />

          <StatisticsLine
            text="Positive"
            value={total !== 0 ? positive : "No numbers to calculate"}
          />
        </table>
      </div>
    );
  }
};

export default Statistics;
