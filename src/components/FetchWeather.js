import React from 'react';
import SingleWeather from './SingleWeather';
import {useState, useEffect} from 'react';


const FetchWeather = ({cities, deleteCity, incorrectCity}) => {


    const apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';
    const [fetchData, setFetchData] = useState({});


    useEffect(() => {


        cities.map(async city=>{
              
            const res =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            const data = await res.json();    
                console.log(data.cod)   
                if(data.cod==200){
                    setFetchData((fetchData=>({...fetchData,[city]: data}))); 
                }else{
                   (()=>incorrectCity(city))()
                   
                }
                
                                                             
        })

        return setFetchData({})

    }, [cities, deleteCity])

  

    return (
        <>
            {Object.values(fetchData).map(weatherData=>(            
                 <ul>
                     <SingleWeather       
                     key={weatherData.id}                                          
                        weatherData={weatherData}
                        deleteCity={deleteCity}
                    /> 
                  </ul>
            ))}
        </>
    )
}

export default FetchWeather
