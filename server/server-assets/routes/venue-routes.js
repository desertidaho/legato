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

//PUT TO CREATE LEGATOS BY AN VENUE TO A VENUE (UPDATES VIEWDETAILS VENUE, NOT USER)       working
router.put('/:id/legatosIn', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      venue.legatosIn.unshift(req.body)
      venue.save()
      res.send(venue)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO CREATE LEGATOS BY A VENUE TO A VENUE (UPDATES ACTIVEVENUE REVIEWSGIVEN)        working
router.put('/:id/legatosOut', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      venue.legatosOut.unshift(req.body)
      venue.save()
      res.send(venue)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO SCHEDULE AN EVENT FOR CALENDAR COMPONENT        working on
router.put('/:id/venueSchedule', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      venue.venueSchedule.unshift(req.body)
      venue.save()
      res.send(venue)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO DELETE LEGATOSIN TO VENUES        working
router.put('/:id/delete-legato-in', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      let index = venue.legatosIn.findIndex(l => {
        return l._id == req.body._id
      })
      venue.legatosIn.splice(index, 1)
      venue.save(e => {
        if (e) {
          return next(e)
        }
        res.send(venue)
      })
    })
    .catch(next)
})

//PUT TO DELETE LEGATOSOUT TO VENUES       working on
router.put('/:id/delete-legato-out', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.venueId = req.params.id
  Venue.findById(req.params.id)
    .then(venue => {
      let index = venue.legatosOut.findIndex(l => {
        return l._id == req.body._id
      })
      venue.legatosOut.splice(index, 1)
      venue.save(e => {
        if (e) {
          return next(e)
        }
        res.send(venue)
      })
    })
    .catch(next)
})

// //DELETE - DELETE A VENUE 
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

//DELETE - DELETE AN EVENT                                                 working on
router.delete('/:id/venueSchedule/:scheduleId', (req, res, next) => {
  Venue.findOne({ userId: req.params.id && req.session.uid })
    .then(venue => {
      venue.venueSchedule.forEach((e, index) => {
        if (e.id.toString() == req.params.scheduleId) {
          venue.venueSchedule.splice(index, 1)
        }
      })
      venue.save(err => {
        if (err) {
          return res.status(400).send(err)
        }
        res.send(venue)
      })
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})



module.exports = router