import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from './operations';

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