

const Weather = ({data}) => {



  
        const city =data.name;
        const weather = data.weather[0]['main'];
        const temp = Math.round(data.main['temp']);
        const pressure = data.main['pressure'];
        const humidity = data.main['humidity'];






    return (
        <div class="singleWeatherWrapper">
            <h3 class="city">{city}</h3>
            <span class="data">{weather}</span>
            <div class="innerSingleWrapper">
                <div class="wrapperLeft">
                    <h6 class="temp">{temp}°C</h6>
                </div>
                <div class="wrapperRight">
                    <div class="wrapperUpper">
                        <span class="data">Ciśnienie</span>
                        <span class="data">{pressure}</span>
                    </div>
                    <div class="wrapperLower">
                        <span class="data">Wilgotność</span>
                        <span class="data">{humidity}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
