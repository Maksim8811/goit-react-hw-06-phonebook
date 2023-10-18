import { configureStore } from "@reduxjs/toolkit";

import { createReducer, createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const addContact = createAction("contacts/addContact")



const contactsReducer = createReducer([
    {id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56'},
    {id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12'},
    {id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79'},
    {id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26'},
], {
    [addContact] : (state, action) => [...state, action.payload]
})

const filterReducer = createReducer("", {})

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer}
})