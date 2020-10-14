const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.json({message: 'running'})
})
module.exports = app
