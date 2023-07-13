import Part from "./Part";

const Content = (props) => {
  const { parts } = props;

  return (
    <>
      {parts.map((courseInfo) => (
        <Part
          key={courseInfo.id}
          part={courseInfo.part}
          exercises={courseInfo.exercises}
        />
      ))}
    </>
  );
};

export default Content;
