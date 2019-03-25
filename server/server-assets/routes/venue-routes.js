let router = require('express').Router()
let Venue = require('../models/venue')

//GET ALL VENUES
router.get('/', (req, res, next) => {
  Venue.find({})  // userId: req.session.uid   removed so can see all user data in venues array
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET ONE VENUE BY USER ID
router.get('/:id', (req, res, next) => {
  Venue.findOne({ userId: req.params.id }) //userId: req.session.uid
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

//PUT CHANGE / UPDATE VENUE DETAILS BY VENUES ID
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


//PUT TO CREATE REVIEWS BY AN VENUE TO A VENUE (UPDATES VIEWDETAILS VENUE, NOT USER)       working
router.put('/:id/reviewsReceived', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      venue.reviewsReceived.unshift(req.body)
      venue.save()
      res.send(venue)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO CREATE REVIEWS BY A VENUE TO A VENUE (UPDATES ACTIVEVENUE REVIEWSGIVEN)        working
router.put('/:id/reviewsGiven', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      venue.reviewsGiven.unshift(req.body)
      venue.save()
      res.send(venue)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})


// //DELETE - DELETE AN VENUE 
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

//DELETE - DELETE AN VENUE                                       to remove all venues from array (junk data)
// router.delete('/:id', (req, res, next) => {
//   Venue.findOne({ userId: req.params.id })
//     .then(venue => {

//       venue.remove(err => {
//         if (err) {
//           console.log(err)
//           next()
//           return
//         }
//       })
//       res.send("Successfully Deleted")
//     })
//     .catch(err => {
//       res.status(400).send('ACCESS DENIED; Invalid Request')
//     })
// })


module.exports = router