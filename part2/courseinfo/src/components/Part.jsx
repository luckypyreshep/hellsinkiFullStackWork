const Part = (props) => {
  const { id, name, exercises } = props;

  return (
    <div>
      {name} {exercises}
    </div>
  );
};

export default Part;
