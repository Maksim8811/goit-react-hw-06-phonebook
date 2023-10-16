import {Phonebook} from "./Phonebook/Phonebook"
import {Contacts} from "./Contacts/Contacts"

export const App = () => {
  return (
    <>
         <h1 className="title">Phonebook</h1>
         <Phonebook/>
         <h2 className="title">Contacts</h2>
         {/* <Filter/> */}
         <Contacts/>

    </>
  );
};
