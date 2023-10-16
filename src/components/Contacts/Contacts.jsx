// import React from "react";
// import "./Contacts.css";
// import PropTypes from 'prop-types';

// export const Contacts = ({contacts, onDelete}) => {
    
//     return (
//     <div className="container_contacts">
    
//     <ul>
//         {contacts.map(({name, id, number}) => {
//             return (
//                 <li className="contacts_list" key={id}>{name}: {number}
//                 <button className="contacts_list_button" type="button" onClick={()=>onDelete(id)}>Delete</button>
//                 </li>
//             )
//         })}
//     </ul>
//     </div>
//         )
// }

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object)
// }

import { useSelector } from "react-redux";
import "./Contacts.css";

export const Contacts = () => {
    const contactsStart = useSelector(state => state.contacts)
    console.log('contactsStart', contactsStart)

    return(
        <div className="container_contacts">
            <ul>
                {contactsStart.map(({name,id,number})=> {
                    return (
                        <li className="contacts_list" key={id}>{name}: {number}
                   <button className="contacts_list_button" type="button">Delete</button>
                   </li>
                    )
                })}
            </ul>
        </div>
    )
}