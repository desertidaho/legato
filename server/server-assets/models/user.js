let mongoose = require('mongoose')
let Schema = mongoose.Schema
let Artist = require('./artist')
let Venue = require('./venue')

//bcrypt uses hashing and salt to obfuscate your password 
let bcrypt = require('bcryptjs')
const SALT = 11


let schema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  artist: { type: Boolean, required: true }
}, { timestamps: true })


//statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//schema.methods are used to add a method to a Model instance
schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.hash, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err)
      }
      return resolve(isMatch)
    })
  })
}

// delete artist/venue profile before user account
schema.pre('remove', function (next) {
  this._id
  Promise.all([
    Artist.remove({ userId: this._id })
  ])
  Promise.all([
    Venue.remove({ userId: this._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

module.exports = mongoose.model('User', schema)