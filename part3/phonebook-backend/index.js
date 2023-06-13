import persons from './data.js'
import express from 'express'

const PORT = 3001
const app = express()

app.get('/info', (req, res) => {
    res.send(
        `<p>
            Phone has info for ${persons.length} people <br/>
            ${new Date().toUTCString()}
        </p>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    person ? res.json(person) : res.sendStatus(404)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const newPersons = persons.filter(p => p.id !== id)

    res.sendStatus(204)
})

app.listen(PORT, () => console.log('Listening on port', PORT))