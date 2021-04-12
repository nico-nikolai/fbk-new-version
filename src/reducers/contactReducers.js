const { CREATE_CONTACT, CLEAR_CONTACT } = require("../types");

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return { contact: action.payload };
    case CLEAR_CONTACT:
      return { contact: null };
    default:
      return state;
  }
};

export { contactReducer };
