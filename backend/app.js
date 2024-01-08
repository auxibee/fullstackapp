const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.json({ message: 'ok' })
})

module.exports = app