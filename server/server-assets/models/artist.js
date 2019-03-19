let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Artist'


//reviews, subschema of artist
let reviews = new Schema({
  stars: { type: Number, required: true },
  feedback: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  artistId: { type: ObjectId, ref: 'Artist', required: true }
})


// artist schema
let schema = new Schema({
  artistName: { type: String, required: true },
  actSize: { type: Number, required: true },
  genre: { type: String, required: true },
  styleMusic: { type: String, required: false },
  equipmentDetails: { type: String, required: false },
  performanceNeeds: { type: String, required: false },
  image: { type: String, required: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPrvXM7zMxVo8BtFHj6zIk8tBJbuUG_dhT6Ahc7uf2I0yUjkw' },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedIn: { type: String, required: false },
  phone: { type: String, required: false },
  reviews: [reviews]
}, { timestamps: true })