const Filter = ({ seacrhId, setSearchId, filterPerson, filteredPerson }) => {
    return (
        <>
            <label htmlFor="filter">Search person with id: </label>
            <input 
                type="text" 
                name='filter'
                id='filter'
                value={seacrhId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={() => filterPerson(seacrhId)}>Search</button>
            <p>{filteredPerson.name} {filteredPerson.phone}</p>            
        </>
    )
}

export default Filter