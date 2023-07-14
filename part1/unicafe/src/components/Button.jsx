const Button = ({ label, modify }) => {
  return <button onClick={modify}>{label}</button>;
};

export default Button;
