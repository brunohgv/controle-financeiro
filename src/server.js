const express = require('express')
const mongoose = require('mongoose')
const PORT = 4500
const app = express()

const credentials = require('./credentials.json')

mongoose.connect(`mongodb+srv://${credentials.DB_USER}:${credentials.DB_PASS}@cluster0-hhvjz.mongodb.net/test?retryWrites=true`, {
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/transactions', require('./routes/transactions'))

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})