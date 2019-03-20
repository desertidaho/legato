let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Venue'


//reviews, subschema of venue
let reviews = new Schema({
  stars: { type: Number, required: true },
  feedback: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
})

// venue schema
let schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  venueName: { type: String, required: true },
  maxOccupancy: { type: Number, required: true },
  venueStyle: { type: String, required: true },
  image: { type: String, required: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw' },
  allAges: { type: Boolean, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  equipmentDetails: { type: String, required: false },
  venueDetails: { type: String, required: false },
  venueDescription: { type: String, required: false },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedIn: { type: String, required: false },
  phone: { type: String, required: false },
  reviews: [reviews]
}, { timestamps: true })

module.exports = mongoose.model(schemaName, schema)