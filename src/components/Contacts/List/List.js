import {useState} from 'react'

const List = ({contacts}) => {
    const[filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item)=>{
        return( Object.keys(item).some((key)=>{
                return(
                item[key].toString().toLowerCase().includes(filterText.toLowerCase())
                )
            })

        );
    });
    console.log(filtered);
  return (
    <>
    <input placeholder='Filter contact' 
     value={filterText}
     onChange={(e)=> setFilterText(e.target.value)}>
     </input>


    <ul className='listing'>
    {contacts.map((contact, index)=>{
        return(
        <li key={index}> 
        <span>{contact.fullName}</span>
        <span>{contact.phoneNumber}</span>
        </li>
        )   
    })}
    </ul>

    <p>Total contacts: {filtered.length}</p>
    </>
  )
}

export default List