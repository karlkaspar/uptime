const port = 8081
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// IF PATH = STATUS CAN DO ANYTHING
app.get('/status', (req, res) => {
  res.send({
    message: 'Jiai'
  })
})

console.log('Server running @' + port)
app.listen(process.env.PORT || port)
