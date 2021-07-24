import styled from 'styled-components'


const SingleWeather = ({weatherData, deleteCity}) => {


        const city =weatherData.name;
        const weather = weatherData.weather[0]['main'];
        const temp = Math.round(weatherData.main['temp']);
        const pressure = weatherData.main['pressure'];
        const humidity = weatherData.main['humidity'];




    return (
        <SingleWeatherWrapper>
            <DeleteButton onClick={()=>deleteCity(city)}>X</DeleteButton>
            <CityName>{city}</CityName>
            <WeatherData>{weather}</WeatherData>
            <WeatherBody>
                <div>
                    <h6>{temp}°C</h6>
                </div>
                <div>
                    <div>
                        <WeatherData>Ciśnienie</WeatherData>
                        <WeatherData>{pressure}</WeatherData>
                    </div>
                    <div>
                        <WeatherData>Wilgotność</WeatherData>
                        <WeatherData>{humidity}</WeatherData>
                    </div>
                </div>
            </WeatherBody>
        </SingleWeatherWrapper>
    )
}



const SingleWeatherWrapper = styled.div`
    margin: 10px;
    width: 250px;
    padding-bottom: 10px;
    background-color: transparent;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid rgb(250, 250, 250);
    position: relative;
`
const CityName = styled.h3`
    margin: 20px;
    text-align: center;
    color: #fff;  
`
const WeatherData = styled.span`
    display: block;
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin: 2px;   
`
const DeleteButton = styled.button` 
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 17px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    
`

const FlexCentering = `
  
display: flex;
justify-content: center;
align-items: center;
width: 50%;
    
`

const WeatherBody = styled.span`
  
  display: flex;


 & > :nth-child(1){
     ${FlexCentering}

     & > h6{
        color: #fff;
        font-size: 22px;
     }
 
 }
 & > :nth-child(2){
    width: 50%;

    & > :nth-child(1){
        margin: 10px 0;
        border-left: solid 1px #fff;

        & > span{
            text-align: center;
            color: #fff;
            font-size: 16px;
            margin: 2px;
        }
    }
    & > :nth-child(2){
        margin: 10px 0;
        border-left: solid 1px #fff;

        & > span{
            text-align: center;
            color: #fff;
            font-size: 16px;
            margin: 2px;
        }
    }

 }

    
`



export default SingleWeather
