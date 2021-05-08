import {useState, useEffect} from 'react';
import Header from './components/Header';
import AddCity from './components/AddCity';
import DisplayWeather from './components/DisplayWeather';



const App = () => {


    const [cities, setCities] = useState([]);
    const apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';

    const addCity = (newCity)=>{
        setCities([...cities, newCity]);
        
    }

    useEffect(() => {
         loadCityFromLocalStore()

    }, [cities])



    const getData = async(city)=>{
        console.log(city)
        const res =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        const data = await res.json();
        console.log(data)
    }


    const displayData = ()=>{

    }

    const loadCityFromLocalStore =()=>{
        cities.forEach(city=>getData(city))
    }


    return (
        <div>
            <Header />
            <AddCity addCity={addCity}/>
            <DisplayWeather />
        </div>
    )
}

export default App
