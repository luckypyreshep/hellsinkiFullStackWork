const Part = (props) => {
  const { part, exercises } = props;

  return (
    <>
      <div>
        {part} {exercises}
      </div>
    </>
  );
};

export default Part;
