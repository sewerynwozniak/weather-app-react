import {useState, useEffect} from 'react';
import Header from './components/Header';
import AddCity from './components/AddCity';
import FetchWeather from './components/FetchWeather';
import styled from 'styled-components'


const App= () => {


    const [cities, setCities] = useState([]);
  
  
    const addCity = (newCity)=>{
         localStorage.setItem(newCity.toLowerCase(), '');
         loadCityFromLocalStore()
    }



    useEffect(() => {
         loadCityFromLocalStore()
    }, [])



    const loadCityFromLocalStore =()=>{      
      setCities([...Object.keys(localStorage)])
    }



    const deleteCity = (city)=>{
        localStorage.removeItem(city.toLowerCase())
        loadCityFromLocalStore()
    }

    const incorrectCity = (city)=>{
        localStorage.removeItem(city.toLowerCase())
    }


   
    return (
        
        <AppWrapper>
            <Header />
            <AddCity addCity={addCity}/>
            <FetchWeather cities={cities} deleteCity={deleteCity} incorrectCity={incorrectCity}/>
        </AppWrapper>
    )


}


const AppWrapper = styled.main`

background-repeat: no-repeat;
background-image: linear-gradient(rgb(96, 154, 192), rgb(35, 114, 167));
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
overflow: auto;
min-height: 100vh;

`


export default App



