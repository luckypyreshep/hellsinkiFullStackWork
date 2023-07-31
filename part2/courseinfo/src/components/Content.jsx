import Part from "./Part";

const Content = (props) => {
  const { courseParts } = props;
  return (
    <>
      {courseParts.map((coursePart) => (
        <div key={coursePart.id}>
          <Part
            key={coursePart.id}
            id={coursePart.id}
            name={coursePart.name}
            exercises={coursePart.exercises}
          />
        </div>
      ))}
    </>
  );
};

export default Content;
