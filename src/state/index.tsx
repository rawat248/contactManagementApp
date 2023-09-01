import { createSlice } from "@reduxjs/toolkit";

interface ContactState {
  list: Array<{
    id: string;
    FirstName: string;
    LastName: string;
    Status: string;
  }>;
}

const initialState: ContactState = {
  list: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { FirstName, LastName, Status } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          { id: new Date().getTime().toString(), FirstName, LastName, Status },
        ],
      };
    },

    editContact: (state, action) => {
      const editedContact = action.payload;
      const index = state.list.findIndex(
        (contact) => contact.id === editedContact.id
      );
      if (index !== -1) {
        state.list[index] = editedContact;
      }
    },

    deleteContact: (state, action) => {
      const idToDelete = action.payload;
      state.list = state.list.filter((contact) => contact.id !== idToDelete);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
