const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "DELETE_CONTACT_SUCCESS":
      const updatedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
};

export default contactsReducer;
