import { useState, useEffect } from "react";
import DisplayPersons from "./components/DisplayPersons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import peopleService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [refreshData, setRefreshData] = useState(true); // State to trigger data refresh
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    if (refreshData) {
      peopleService.getAll().then((response) => {
        setPersons(response.data);
      });
      setRefreshData(false);
    }
  }, [refreshData]);

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

  // Adds new contact info if doesn't already exist
  const alreadyExists = (e) => {
    e.preventDefault();
    const found = persons.find((person) => newName === person.name);
    if (found !== undefined) {
      if (
        window.confirm(
          `${found.name} is already in this phonebook, replace their old number with the new one?`
        )
      ) {
        peopleService.editNumber(found, newNumber);
        setRefreshData(true);
      }
    } else {
      peopleService
        .addPerson({ name: newName, number: newNumber })
        .then(() => {
          setRefreshData(true);
        })
        .then(() => {
          setNotificationMessage(`${newName} was succcessfully added`);
          setTimeout(() => {
            setNotificationMessage("");
          }, 5000);
        });
    }
    setNewName("");
    setNewNumber("");
  };

  const deleteHandler = (person) => {
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      peopleService.deletePerson(person).then(() => {
        setRefreshData(true);
      });
    }
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
      {notificationMessage !== "" ? (
        <Notification
          notificationMessage={notificationMessage}
          notifyType="positive"
        />
      ) : null}
      <h2>Numbers</h2>

      <DisplayPersons
        deletePerson={deleteHandler}
        persons={searchResults.length > 0 ? searchResults : persons}
      />
    </div>
  );
};

export default App;
