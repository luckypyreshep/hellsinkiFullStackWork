const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        <b>{text}</b>
      </td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticsLine;
