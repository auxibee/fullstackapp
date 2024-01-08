const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.json({ message: 'ok' })
})

app.get('/names', async (req, res) => {
    res.json({ test: 'testing' })
})

module.exports = app