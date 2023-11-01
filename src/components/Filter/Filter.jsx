import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {filterContact} from "../../redux/store"

export const Filter = () => {

    const contactFilter = useSelector(state => state.filter.value)
    // console.log('contactFilter', contactFilter)
    const dispatch = useDispatch()

    const onChange = e => {
        const filterName = e.target.value
        // dispatch(filterContact(filterName))
        console.log('filterName', filterName)
    }
    
    return (
        <div>
            <label className="filter">Find contacts by name
                <input 
                 
                 className="filter_input"
                 value={contactFilter}
                 name="filter" 
                 type="text"
                 onChange={e=>dispatch(filterContact(e.currentTarget.value))}
                 />
            </label>
        </div>
        
    )

}



