let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Artist'


//review to an artist or venue, subschema of artist
let reviewGiven = new Schema({
  stars: { type: Number, required: false },
  feedback: { type: String, required: true },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  artistId: { type: ObjectId, ref: 'Artist', required: true }
})

//review from an artist or venue, subschema of artist
let reviewReceived = new Schema({
  stars: { type: Number, required: false },
  feedback: { type: String, required: true },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  artistId: { type: ObjectId, ref: 'Artist', required: true }
})

// artist schema
let schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  artistName: { type: String, required: true },
  actSize: { type: Number, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw' },
  styleMusic: { type: String, required: false },
  homeBase: { type: String, required: false },
  equipmentDetails: { type: String, required: false },
  performanceNeeds: { type: String, required: false },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedIn: { type: String, required: false },
  phone: { type: String, required: false },
  imageShowcase: [{ type: String, required: false }],//need to verify if this is set up will work
  reviewsGiven: [reviewGiven],
  reviewsReceived: [reviewReceived]
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)