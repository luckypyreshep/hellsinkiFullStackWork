import { useState } from "react";

import DisplayPersons from "./components/DisplayPersons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const updateSearch = (event) => {
    const value = event.target.value;
    if (value !== "") {
      const searchResults = persons.filter((person) =>
        person.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(searchResults);
    } else {
      setSearchResults([]);
    }
  };

  const alreadyExists = (e) => {
    e.preventDefault();
    const found = persons.find((person) => newName === person.name);
    if (found !== undefined) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersons = [...persons];
      newPersons.push({ name: newName, number: newNumber });
      setPersons(newPersons);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateSearch={updateSearch} />
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        alreadyExists={alreadyExists}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>

      <DisplayPersons
        persons={searchResults.length > 0 ? searchResults : persons}
      />
    </div>
  );
};

export default App;
