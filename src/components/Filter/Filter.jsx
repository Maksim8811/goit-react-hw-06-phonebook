import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {findContact} from "../../redux/store"

export const Filter = () => {

    const contactFilter = useSelector(state=>state.filter)
    // console.log('contactFilter', contactFilter)
    const dispatch = useDispatch()

    // const onChange = e => {
    //     const filterName = e.target.value
    //     dispatch(findContact(filterName))
    //     // console.log('filterName', filterName)
    // }
    
    return (
        <div>
            <label className="filter">Find contacts by name
                <input 
                 
                 className="filter_input"
                 value={contactFilter}
                 name="filter" 
                 type="text"
                 onChange={e=>console.log('e.target.value', e.target.value)}
                 />
            </label>
        </div>
        
    )

}



