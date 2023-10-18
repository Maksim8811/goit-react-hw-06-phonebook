// import React, {useState} from "react";
// import "./Phonebook.css";
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';


// export function Phonebook ({onSubmit}) {
//  const loginInputId = nanoid()
//  const telInputId = nanoid()
  
//   const [name, setName] = useState('')
//   const [number, setNumber] = useState('')
//   const [id, setId] = useState('')
 

//   const  handleNameChange = evt => {
//       setName(evt.target.value)
//       setId(loginInputId)
//     }

//   const handleNumberChange = evt => {
//       setNumber(evt.target.value)
//   }  

//   const handleSubmit = ev => {
//       ev.preventDefault()
//       onSubmit({name, number, id})
//       console.log('name, number, id', name, number, id)
//       reset()
//     }

//  const reset = () => {
//       setName('')
//       setNumber('')
//       setId('')
//   }  
   

  
      
//       return (
//       <>
//       <div className="container_form">
//       <form htmlFor={loginInputId} className="form" onSubmit={handleSubmit}>
//       <label className="label_form" id={loginInputId}>Name
//       <input
//       onChange={handleNameChange} 
//       value={name} 
//       className="input"     
//       type="text"
//       name="name"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
// />

// <label className="label_form" id={telInputId}>Number
// <input
// onChange={handleNumberChange}
// value={number} 
// type="tel"
// name="number"
// title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// required
// />
// </label>

// <button className="button" type="submit" >Add contact</button>
// </label>
//      </form>
//      </div>
     
// </>
  
// )
// }

// Phonebook.propTypes = {
//   onSubmit: PropTypes.func
// }

// export default Phonebook;
import "./Phonebook.css";
import { useSelector, useDispatch } from "react-redux";
import {addContact} from "../../redux/store"
import { nanoid } from 'nanoid'

export function Phonebook () {
    const contactsInitial = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    console.log('contactsInitial', contactsInitial)

    const loginInputId = nanoid()
    const telInputId = nanoid()

    const handleSubmit = ev => {
              ev.preventDefault()
              
              const newContactObj = {
                id: nanoid(),
                name: ev.target.elements.name.value,
                number: ev.target.elements.number.value,
              }

              dispatch(addContact(newContactObj))
              ev.target.reset()
            }


    return (
             <>
      <div className="container_form">
      <form htmlFor={loginInputId} className="form" onSubmit={handleSubmit} > 
      <label className="label_form" id={loginInputId}>Name
      <input
       
    
      className="input"     
      type="text"
      name="name"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
/>

<label className="label_form" id={telInputId}>Number
<input

type="tel"
name="number"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
</label>

<button className="button" type="submit" >Add contact</button>
</label>
     </form>
     </div>
     
</>

    )
}