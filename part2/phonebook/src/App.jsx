import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/personService'

const App = () => {
  const [seacrhId, setSearchId] = useState(0)
  const [filteredPerson, setFilteredPerson] = useState({name: '', phone: '', id: 0})
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 }
  ])
  const [newPerson, setNewPerson] = useState({name: '', phone: '', id: 0})
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() =>{
    personService.getPersons()
      .then(data => setPersons(data))
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
    const existedPerson = persons.find(person => person.name === newPerson.name)
    
    if(existedPerson) {
      if(confirm(`${existedPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...existedPerson, phone: newPerson.phone}
        personService.updateUser(changedPerson, changedPerson.id)
          .then(changedUser => {
            setPersons(persons.map(person => person.id !== changedUser.id ? person : changedUser))
          })
          .catch(err => console.error(err))
      }

      setErrorMessage(`Changed ${existedPerson.name}`)
      setTimeout(() => setErrorMessage(null), 2000)
      setNewPerson({name: '', phone: '', id: ''})
      return
    }
    
    personService.create({...newPerson, id: persons.length + 1})
      .then(createdPerson => setPersons(persons.concat(createdPerson)))
      .catch(err => console.error(err))
    
    setErrorMessage(`Added ${newPerson.name}`)
    setTimeout(() => setErrorMessage(null), 2000)
    setNewPerson({name: '', phone: '', id: ''})
  }

  const filterPerson = id => {
    const person = persons.filter(person => person.id === Number(id))
    if(person != []) {
      setFilteredPerson({...person[0]})
    } 
  }

  const handleDelete = id => {
    personService.deleteUser(id)
      .then(deletedUser => setPersons(persons.filter(person => person.id !== id)))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
        persons.map(person => { 
          return ( 
            <div key={person.name}>
              <p>{person.name} {person.phone}</p>
              <button onClick={() => handleDelete(person.id)}>delete</button>
            </div>
          )}
        )     
      }
    </div>
  )
}

export default App