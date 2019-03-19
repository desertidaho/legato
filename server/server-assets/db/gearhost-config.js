var mongoose = require('mongoose')
var connectionString = "mongodb://legato:legatopass1!@den1.mongo1.gear.host:27001/legato"
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})