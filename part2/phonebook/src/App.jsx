import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/personService'

const App = () => {
  const [seacrhId, setSearchId] = useState(0)
  const [filteredPerson, setFilteredPerson] = useState({name: '', phone: '', id: 0})
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 }
  ])
  const [newPerson, setNewPerson] = useState({name: '', phone: '', id: 0})

  useEffect(() =>{
    axios.get('http://localhost:3001/persons')
      .then(res => setPersons(res.data))
      .catch(err => console.error(err))
  }, [])
  
  const handleChange = e => {
    const {name, value} = e.target
    
    setNewPerson(prevPersons => ({
      ...prevPersons,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const personIsExists = persons.find(person => person.name === newPerson.name)
    
    if(personIsExists) {
      alert(`${newPerson.name} is already added to phonebook`)
      return 
    }
    
    personService.create({...newPerson, id: persons.length + 1})
      .then(createdPerson => setPersons(persons.concat(createdPerson)))
      .catch(err => console.error(err))
    
      setNewPerson({name: '', phone: '', id: 0})
  }

  const filterPerson = id => {
    const person = persons.filter(person => person.id === Number(id))
    if(person != []) {
      setFilteredPerson({...person[0]})
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        seacrhId={seacrhId}
        setSearchId={setSearchId}
        filterPerson={filterPerson}
        filteredPerson={filteredPerson}
      />
      <h2>Add a new person</h2>
      <PersonForm
        newPerson={newPerson} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)     
      }
    </div>
  )
}

export default App