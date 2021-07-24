

const SingleWeather = ({weatherData, deleteCity}) => {


        const city =weatherData.name;
        const weather = weatherData.weather[0]['main'];
        const temp = Math.round(weatherData.main['temp']);
        const pressure = weatherData.main['pressure'];
        const humidity = weatherData.main['humidity'];




    return (
        <div className="singleWeatherWrapper">
            <button onClick={()=>deleteCity(city)}>X</button>
            <h3 className="city">{city}</h3>
            <span className="data">{weather}</span>
            <div className="innerSingleWrapper">
                <div className="wrapperLeft">
                    <h6 className="temp">{temp}°C</h6>
                </div>
                <div className="wrapperRight">
                    <div className="wrapperUpper">
                        <span className="data">Ciśnienie</span>
                        <span className="data">{pressure}</span>
                    </div>
                    <div className="wrapperLower">
                        <span className="data">Wilgotność</span>
                        <span className="data">{humidity}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleWeather
