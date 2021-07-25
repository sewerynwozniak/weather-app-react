import {useState} from 'react';
import styled from 'styled-components'

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
        <SyledForm onSubmit={onSubmit}>
            <SpanInput>Podaj miasto:</SpanInput>
            <CityInput type='text'  onChange={(e)=>{setNewCity(e.target.value)}} value={newCity}/>
            <SubmitButton type='submit'>Dodaj</SubmitButton>        
        </SyledForm>
    )
}



const SyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    text-align: center;

    @media (max-width: 450px){
        flex-direction: column;
    }

`

const CityInput = styled.input`
    padding: 10px;
    margin:30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
`

const SpanInput = styled.span`
   color: #fff;
`

const SubmitButton = styled.button`
    padding: 10px 20px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
`



export default AddCity
