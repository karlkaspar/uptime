const port = 8081
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

// IF PATH = STATUS CAN DO ANYTHING
app.post('/register', (req, res) => {
  console.log('Hello' + req.body)
  res.send(`Hello ${req.body.email} !`)
})

console.log('Server running @' + port)
app.listen(process.env.PORT || port)
