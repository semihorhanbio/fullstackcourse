const PersonForm = ({ newPerson, handleChange, handleSubmit }) => {
    return (
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
    )
}

export default PersonForm