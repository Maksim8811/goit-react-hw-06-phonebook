import { configureStore } from "@reduxjs/toolkit";

import { createReducer, createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact")


const contactsReducer = createReducer([
    {id: ``, name: 'Rosie Simpson', number: '459-12-56'},
    {id: ``, name: 'Hermione Kline', number: '443-89-12'},
    {id: ``, name: 'Eden Clements', number: '645-17-79'},
    {id: ``, name: 'Annie Copeland', number: '227-91-26'},
], {
    [addContact] : (state, action) => state.push(action.payload)
})

const filterReducer = createReducer("", {})

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer}
})