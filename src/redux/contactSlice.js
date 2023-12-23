import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addAsyncContact, deleteAsyncContact } from './operations';

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
            .addCase(addAsyncContact.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteAsyncContact.fulfilled, (state, action) => {
                return state.filter(contact => contact.id !== action.payload);
            });
        },
    });

export const { reducer: contactsReducer } = contactsSlice;