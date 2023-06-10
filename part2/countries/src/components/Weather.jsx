const Weather = ({capital, weatherData}) => (
    <>
        <h2>Weather in {capital}</h2>
        <p>temperature {weatherData.main.temp} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
        <p>wind {weatherData.wind.speed} m/s</p>    
    </>
)

export default Weather