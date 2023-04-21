import { useSelector } from 'react-redux'
import  ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { getPhones } from "redux/phoneSlice";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { Loader } from './Loader/Loader';

export default function App () {
  const contacts = useSelector(getPhones);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length>0 ? <h2>Contacts</h2> : <h2>There are no contacts</h2>}
        {contacts.length>0 &&  <Filter />}
        {contacts.isLoading && <Loader/>}
        <ContactList />
    </div>
  );
    };

