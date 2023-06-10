import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const create = async (newObj) => {
    const request = await axios.post(baseUrl, newObj)
    const response = await request.data
    return response
}

export default {create}