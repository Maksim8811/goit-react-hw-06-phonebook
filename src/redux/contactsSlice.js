
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const myContactSlice = createSlice({
    name: "contacts", 
    initialState: [
    {id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56'},
    {id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12'},
    {id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79'},
    {id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26'},
],
    reducers: {
    addContact (state, action)  { state.push(action.payload)},
    deleteContact (state, action) {
        return state.filter(todo=> todo.id !== action.payload) }
    }})

    export const {addContact, deleteContact} = myContactSlice.actions




