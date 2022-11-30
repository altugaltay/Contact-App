import React, { useEffect, useState } from 'react'
import Form from './Form/Form';
import List from './List/List';

const Contact = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(()=>{

        console.log(contacts)

    },[contacts]);

  return (
    <>
    <List contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts}/>
    </>

  );
}

export default Contact