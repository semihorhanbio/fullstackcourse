import persons from './data.js'
import express from 'express'

const PORT = 3001
const app = express()

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(PORT, () => console.log('Listening on port', PORT))