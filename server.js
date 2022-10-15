const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Hello There General Kenobi</h1>')
})


app.listen(3000, () => {
    console.log('Listening on Port 3000')
})