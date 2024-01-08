const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.json({ message: 'ok' })
})

app.get('/health', async (req, res) => {
    res.json({ message: 'testing.....' })
})

module.exports = app