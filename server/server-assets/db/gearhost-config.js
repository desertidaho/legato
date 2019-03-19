var mongoose = require('mongoose')
var connectionString = "mongodb://legato:Qs3zXu9?Fe_C@den1.mongo1.gear.host:27001/legato" // changed
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})