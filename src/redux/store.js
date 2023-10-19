import { configureStore } from "@reduxjs/toolkit";

import { createReducer, createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const addContact = createAction("contacts/addContact")
export const deleteContact =createAction("contacts/deleteContact")

const contactsReducer = createReducer([
    {id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56'},
    {id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12'},
    {id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79'},
    {id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26'},
], {
    [addContact] : (state, action) =>  {state.push(action.payload)},
    [deleteContact] : (state, action) => {
        return state.filter(todo=> todo.id !== action.payload)
    }
})

const filterReducer = createReducer("", {})

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer}
})