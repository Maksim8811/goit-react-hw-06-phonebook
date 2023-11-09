import {configureStore} from "@reduxjs/toolkit"
import {myContactSlice} from "./contactsSlice"
import {filterSlice} from "./filterSlice"

export const store = configureStore({
    reducer: {
        contacts: myContactSlice.reducer,
        filter: filterSlice.reducer,
    }
})

export const {addContact, deleteContact} = myContactSlice.actions
export const {filterContact} = filterSlice.actions


