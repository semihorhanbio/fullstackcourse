import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getPersons = async () => {
    const response = await axios.get(baseUrl)
    const persons = await response.data
    return persons
}

const create = async (newObj) => {
    const request = await axios.post(baseUrl, newObj)
    const response = await request.data
    return response
}

export default {getPersons, create}