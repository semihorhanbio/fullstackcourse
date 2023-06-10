const CountryInfo = ({name, capital, area, languages, flag}) => {
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
        </div>
    )
}

export default CountryInfo