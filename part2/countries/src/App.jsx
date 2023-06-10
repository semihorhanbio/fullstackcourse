import { useState, useEffect } from 'react'
import CountryInfo from './components/CountryInfo'

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err))

  }, [])

  const filterCountries = (e) => {
    setQuery(e.target.value)
    setCountries(countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase())))
  }
  console.log(countries.length)
  return (
    <>
      <label htmlFor="country">find countries</label>
      <input 
        type="text"
        name="country"
        value={query}
        onChange={(e) => filterCountries(e)} 
      />
      {
        countries.length > 10 ? <p>Too many matches, specify another filter</p> 
        : countries.length === 1 ? <CountryInfo name={countries[0].name.common} capital={countries[0].capital[0]} area={countries[0].area} languages={Object.values(countries[0].languages)} flag={countries[0].flags} />
        : countries.map(country => <p key={country.name.common}>{country.name.common}</p>)
      }
    </>
  )
}

export default App
