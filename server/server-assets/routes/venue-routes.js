let router = require('express').Router()
let Venue = require('../models/venue')

//GET ALL VENUES
router.get('/', (req, res, next) => {
  Venue.find({ userId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET ONE VENUE BY ID
router.get('/:id', (req, res, next) => {
  Venue.findOne({ _id: req.params.id, userId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST - CREATE NEW VENUE
router.post('/', (req, res, next) => {
  req.body.userId = req.session.uid
  Venue.create(req.body)
    .then(newVenue => {
      res.send(newVenue)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT CHANGE / UPDATE VENUE DETAILS
router.put('/:id', (req, res, next) => {
  Venue.findById(req.params.id)
    .then(venue => {
      if (!venue.userId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      venue.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE - DELETE AN VENUE 
router.delete('/:id', (req, res, next) => {
  Venue.findOne({ _id: req.params.id, userId: req.session.uid })
    .then(venue => {
      if (!venue.userId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      venue.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
      })
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})


module.exports = router