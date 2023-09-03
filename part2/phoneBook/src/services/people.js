import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const addPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

const deletePerson = (person) => {
  return axios.delete(baseUrl + `/${person.id}`);
};

const editNumber = (person, newNumber) => {
  return axios.put(baseUrl + `/${person.id}`, {
    id: person.id,
    name: person.name,
    number: newNumber,
  });
};

export default {
  getAll,
  addPerson,
  deletePerson,
  editNumber,
};
