import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => {
  const { courses } = props;
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header title={course.name} />
          <Content courseParts={course.parts} />
          <Total courseParts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
