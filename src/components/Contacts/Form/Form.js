import React, { useEffect } from 'react';
import { useState } from 'react';

const initialFormValue = {fullName: "", phoneNumber: ""};

const Form = ({addContact, contacts}) => {

    const [form, setForm]= useState(initialFormValue);

    useEffect(()=>{

        setForm(initialFormValue);

    },[contacts])



    const onChangeInput = (e) =>{

        setForm({...form,[e.target.name]: e.target.value })

    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if(form.fullName === '' || form.phoneNumber === ''){
            return false;
        }

        addContact([...contacts, form]);

    };

  return (
    <> 
    <form onSubmit={onSubmit}>
        
        <input onChange={onChangeInput} name={"fullName"} value={form.fullName} placeholder={"Full Name"}></input>
        <br></br>
        
        <input onChange={onChangeInput} name={"phoneNumber"} value={form.phoneNumber} placeholder={"Phone Number"}></input>
        <br></br>
        <button className='abc'>Add</button>
    </form>
    </>
  )
}

export default Form