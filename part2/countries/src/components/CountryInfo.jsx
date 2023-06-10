import { useState } from "react"
import { useEffect } from "react"
import Weather from "./Weather"

const CountryInfo = ({name, capital, area, languages, flag}) => {
    const apiKey = '<apikeyhere>'
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
    }, [])

    return (
        <div className="country-container">
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Languages</p>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={flag.png} alt={flag.alt} />
            {weatherData && <Weather capital={capital} weatherData={weatherData} temperature={weatherData.main.temp} icon={weatherData.weather[0].icon} windSpeed={weatherData.wind.speed} />}
        </div>
    )
}

export default CountryInfo