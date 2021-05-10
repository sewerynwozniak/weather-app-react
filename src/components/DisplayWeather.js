import Weather from './Weather';
import {useState, useEffect} from 'react';


const DisplayWeather = ({displayWeather}) => {


    const [fetchData, setFetchData] = useState([]);

    const apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';


    useEffect(() => {


        console.log(displayWeather)

        displayWeather.map( async city=>{
            const res =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            const data = await res.json();

            console.log(data)
            setFetchData([...fetchData , data]);
        })

    }, [])
    



    return (
        <div>
            {fetchData.map(data=>(            
                 <>
                     <Weather 
                        key={data.id}
                        data={data}/> 
                  </>
            ))}
        </div>
    )
}

export default DisplayWeather
