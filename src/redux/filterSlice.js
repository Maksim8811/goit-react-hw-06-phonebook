import {createSlice} from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
   filterContact (_,actions) {
     return actions.payload 
     }
}})

export const { filterContact } = filterSlice.actions;