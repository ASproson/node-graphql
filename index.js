const express = require("express")
const app = express()
const PORT = 8080
const userData = require('./data/DUMMY_DATA.json')

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})