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

app.listen(PORT, () => console.log('Listening on port', PORT))