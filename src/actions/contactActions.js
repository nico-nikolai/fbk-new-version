import { CREATE_CONTACT, CLEAR_CONTACT } from "../types";

export const createContact = (contact) => dispatch => {
    fetch("/api/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    })
    .then((res) => res.json())
    .then((data) => {
        dispatch({ type: CREATE_CONTACT, payload: data });
    })
}

export const clearContact = () => (dispatch) => {
  dispatch({ type: CLEAR_CONTACT });
};

