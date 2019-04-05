let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Venue'


//review to an artist or venue, subschema of venue
let reviewGiven = new Schema({
  stars: { type: Number, required: false },
  feedback: { type: String, required: false },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
})

//review from an artist or venue, subschema of venue
let reviewReceived = new Schema({
  stars: { type: Number, required: false },
  feedback: { type: String, required: false },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
})

//legato to an artist or venue, subschema of venue
let legatoOut = new Schema({
  message: { type: String, required: true },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
}, { timestamps: true })

//legato from an artist or venue, subschema of venue
let legatoIn = new Schema({
  message: { type: String, required: true },
  artistTo: { type: String, required: false },
  artistFrom: { type: String, required: false },
  venueTo: { type: String, required: false },
  venueFrom: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
}, { timestamps: true })

//calendar schedule, subschema of venue
let schedule = new Schema({
  time: { type: String, required: false },
  date: { type: Date, required: true },
  details: { type: String, required: false },
  venueName: { type: String, required: false },
  scheduledWith: { type: String, required: false },
  userId: { type: ObjectId, ref: 'User', required: true },
  venueId: { type: ObjectId, ref: 'Venue', required: true }
})

// venue schema
let schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  venueName: { type: String, required: true },
  maxOccupancy: { type: Number, required: true },
  venueStyle: { type: String, required: true },
  image: { type: String, required: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzspGltPiHKKA9aIGwA2Qo78BxkaQLrBP3Pvms-3GDMHLSh6Ml' },
  allAges: { type: Boolean, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  equipmentDetails: { type: String, required: false },
  venueDetails: { type: String, required: false },
  venueDescription: { type: String, required: false },
  twitter: { type: String, required: true, default: 'https://twitter.com' },
  facebook: { type: String, required: true, default: 'https://facebook.com' },
  instagram: { type: String, required: true, default: 'https://instagram.com' },
  linkedIn: { type: String, required: true, default: 'https://linkedin.com' },
  phone: { type: String, required: false },
  contact: { type: String, required: false },
  imageShowcase: [{ type: String, required: false }],//need to verify if this is set up will work
  reviewsGiven: [reviewGiven],
  reviewsReceived: [reviewReceived],
  legatosOut: [legatoOut],
  legatosIn: [legatoIn],
  venueSchedule: [schedule]
}, { timestamps: true })

module.exports = mongoose.model(schemaName, schema)