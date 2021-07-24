import {useState} from 'react';

const AddCity = ({addCity}) => {


    const [newCity, setNewCity] = useState('')

    const normalizedCity =(city)=>{
        return city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }


    const onSubmit = (e)=>{
        e.preventDefault();
        addCity(normalizedCity(newCity));
        setNewCity('');
    }


    return (
        <form onSubmit={onSubmit}>
            <p>Podaj miasto:</p>
            <input type='text'  onChange={(e)=>{setNewCity(e.target.value)}} value={newCity}/>
            <input type='submit' value='Dodaj'/>
            
        </form>
    )
}

export default AddCity
