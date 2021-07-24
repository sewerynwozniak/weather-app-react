import {useState, useEffect} from 'react';
import Header from './components/Header';
import AddCity from './components/AddCity';
import FetchWeather from './components/FetchWeather';



const App = () => {


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


   
    return (
        
        <div>
            <Header />
            <AddCity addCity={addCity}/>
            <FetchWeather cities={cities} deleteCity={deleteCity} />
        </div>
    )
    
}

export default App
