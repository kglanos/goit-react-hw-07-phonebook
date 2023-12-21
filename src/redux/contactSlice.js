import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', 
    async () => {
        const response = await fetch('https://6584738a4d1ee97c6bcfc4f4.mockapi.io/kglanos/contacts');
        const data = await response.json();
        return data;
    }
);

export const createContact = createAsyncThunk('contacts/createContact', 
    async (contact) => {
        const response = await fetch('https://6584738a4d1ee97c6bcfc4f4.mockapi.io/kglanos/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        const data = await response.json();
        return data;
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId) => {
        await fetch(`https://6584738a4d1ee97c6bcfc4f4.mockapi.io/kglanos/contacts/${contactId}`, {
            method: 'DELETE'
        });
        return contactId;
    }
);

const initialContacts = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(createContact.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        });
    },
});

export const { reducer: contactsReducer } = contactsSlice;