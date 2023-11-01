import { createSlice } from "@reduxjs/toolkit"

const initialState = {value: ''}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
     filterContact (state,action) {
        state.value = action.payload
     }
}})

export const { filterContact } = filterSlice.actions;
export const getFilterValue = state => state.filter.value