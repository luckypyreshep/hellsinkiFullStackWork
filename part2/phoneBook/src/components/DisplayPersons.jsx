const DisplayPersons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.name}>
          <span>
            {person.name} {person.number}{" "}
          </span>
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default DisplayPersons;
