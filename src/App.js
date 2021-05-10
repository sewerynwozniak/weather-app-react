import {useState, useEffect} from 'react';
import Header from './components/Header';
import AddCity from './components/AddCity';
import DisplayWeather from './components/DisplayWeather';



const App = () => {


    const [cities, setCities] = useState(['Kraków']);
    


    const addCity = (newCity)=>{
        setCities([...cities, newCity]);

        let cityId = localStorage.length;
        localStorage.setItem(`city${cityId}`, newCity);
     
    }

    useEffect(() => {
         loadCityFromLocalStore()

    }, [cities])



 


    const loadCityFromLocalStore =()=>{
        //cities.forEach(city=>getData(city))
    }

   




 
    const displayData = ()=>{
        
    }




    return (
        <div>
            <Header />
            <AddCity addCity={addCity}/>
            <DisplayWeather displayWeather={cities}/>
        </div>
    )
}

export default App
