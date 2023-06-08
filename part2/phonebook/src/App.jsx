import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const personIsExists = persons.find(person => person.name === newName)
    
    personIsExists ? 
      alert(`${newName} is already added to phonebook`) :
      setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id='name'
            name='name'
            value={newName}
            onChange={(e) => setNewName(e.target.value)} 
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App