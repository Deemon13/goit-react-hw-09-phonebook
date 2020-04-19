import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";

// const AUTH_TOKEN =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTk3M2M5NWYxMDc4ZTAwMTc1YWRjOTgiLCJpYXQiOjE1ODY5Njk3NDl9.vNTXzMP09pGaLDoZ9kJjYvmP2y3mn37nGLFsWstjhWc";

// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) =>
      dispatch(contactsActions.deleteContactError(error.message))
    );
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
