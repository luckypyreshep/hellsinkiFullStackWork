const Statistics = ({ good, bad, neutral }) => {
  const add = (acc, a) => {
    return acc + a;
  };
  const total = [good, neutral, bad].reduce(add, 0);
  const positive = (good / total) * 100;
  const average = total / 3;

  return (
    <div>
      <div>
        <b>good</b> {good}
      </div>
      <div>
        <b>neutral</b> {neutral}
      </div>
      <div>
        <b>bad</b> {bad}
      </div>
      <div>
        <b>Total</b> {total}
      </div>
      <div>
        <p>
          <b>Positive</b> {total !== 0 ? positive : "No numbers to calculate"} %
        </p>
      </div>
      <div>
        <p>
          <b>Average</b> {average}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
