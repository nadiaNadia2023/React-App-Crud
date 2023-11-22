import axios from "axios";

export const fetchContactsSuccess = (contacts) => ({
  type: "FETCH_CONTACTS_SUCCESS",
  payload: contacts,
});

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      console.log("Fetching contacts...");
      const response = await axios.get("http://localhost:9000/contacts");
      console.log("Contacts fetched successfully:", response.data);
      dispatch(fetchContactsSuccess(response.data));
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
};

export const deleteContactSuccess = (contactId) => ({
  type: "DELETE_CONTACT_SUCCESS",
  payload: contactId,
});

export const deleteContact = (contactId) => {
  return async (dispatch) => {
    try {
      console.log("Deleting contact...");
      await axios.delete(`http://localhost:9000/contacts/${contactId}`);
      console.log("Contact deleted successfully:", contactId);
      dispatch(deleteContactSuccess(contactId));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
};
