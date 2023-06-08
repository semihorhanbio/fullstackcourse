import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '90-554-6615555' }
  ]) 
  const [newPerson, setNewPerson] = useState({name: '', phone: ''})
  
  const handleChange = e => {
    const {name, value} = e.target
    
    setNewPerson(prevPerson => ({
      ...prevPerson,
      [name]: value
    }))
  }


  const handleSubmit = e => {
    e.preventDefault()
    const personIsExists = persons.find(person => person.name === newPerson.name)
    
    personIsExists ? 
      alert(`${newPerson.name} is already added to phonebook`) :
      setPersons(persons.concat({name: newPerson.name, phone: newPerson.phone}))
    
    setNewPerson({name: '', phone: ''})
  }

  return (
    <div>
      <div>debug: {newPerson.name + ' ' + newPerson.phone}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id='name'
            name='name'
            value={newPerson.name}
            onChange={(e) => handleChange(e)} 
          />
        </div>
        <div>
          <label htmlFor="phone">Number: </label>
          <input 
            id='phoneNumber'
            name='phone'
            value={newPerson.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>        
        <div>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App