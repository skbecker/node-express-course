const express = require('express')
const app = express()
const consoleLogger = require('./practice-middleware')

app.use(consoleLogger)

app.get('/', consoleLogger, (req,res) => {

    res.send('Home')
})


app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
}) 