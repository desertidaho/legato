let router = require('express').Router()
let Artist = require('../models/artist')

//GET ALL ARTISTS
router.get('/', (req, res, next) => {
  Artist.find({}) // userId: req.session.uid   removed so can see all user data in artists array
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET ONE ARTIST BY USER ID
router.get('/:id', (req, res, next) => {
  Artist.findOne({ userId: req.params.id }) //userId: req.session.uid
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST - CREATE NEW ARTIST
router.post('/', (req, res, next) => {
  req.body.userId = req.session.uid
  Artist.create(req.body)
    .then(newArtist => {
      res.send(newArtist)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT CHANGE / UPDATE ARTIST DETAILS BY ARTIST ID
router.put('/:id', (req, res, next) => {
  Artist.findById(req.params.id)
    .then(artist => {
      if (!artist.userId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!?!")
      }
      artist.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated!?!")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT TO CREATE REVIEWS BY AN ARTIST TO AN ARTIST (UPDATES VIEWDETAILS ARTIST, NOT USER)       working
router.put('/:id/reviewsReceived', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.artistId = req.params.id
  Artist.findById(req.params.id)
    .then(artist => {
      artist.reviewsReceived.unshift(req.body)
      artist.save()
      res.send(artist)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO CREATE REVIEWS BY AN ARTIST TO AN ARTIST (UPDATES ACTIVEARTIST REVIEWSGIVEN)        working
router.put('/:id/reviewsGiven', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.artistId = req.params.id
  Artist.findById(req.params.id)
    .then(artist => {
      artist.reviewsGiven.unshift(req.body)
      artist.save()
      res.send(artist)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO CREATE LEGATOS BY AN ARTIST TO AN ARTIST (UPDATES VIEWDETAILS ARTIST, NOT USER)       working
router.put('/:id/legatosIn', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.artistId = req.params.id
  Artist.findById(req.params.id)
    .then(artist => {
      artist.legatosIn.unshift(req.body)
      artist.save()
      res.send(artist)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO CREATE LEGATOS BY AN ARTIST TO AN ARTIST (UPDATES ACTIVEARTIST REVIEWSGIVEN)        working
router.put('/:id/legatosOut', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.artistId = req.params.id
  Artist.findById(req.params.id)
    .then(artist => {
      artist.legatosOut.unshift(req.body)
      artist.save()
      res.send(artist)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

//PUT TO SCHEDULE AN EVENT FOR CALENDAR COMPONENT        working on
router.put('/:id/artistSchedule', (req, res, next) => {
  req.body.userId = req.session.uid
  req.body.artistId = req.params.id
  Artist.findById(req.params.id)
    .then(artist => {
      artist.artistSchedule.unshift(req.body)
      artist.save()
      res.send(artist)
    })
    .catch(err => {
      res.status(418).send(err)
      next()
    })
})

// //DELETE - DELETE AN ARTIST                                                 working, deletes artist
router.delete('/:id', (req, res, next) => {
  Artist.findOne({ userId: req.params.id && req.session.uid })
    .then(artist => {
      if (!artist.userId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!!")
      }
      artist.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
      })
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request!!')
    })
})

// //DELETE - DELETE AN EVENT                                                 working on
router.delete('/:id/artistSchedule/:scheduleId', (req, res, next) => {
  Artist.findOne({ userId: req.params.id && req.session.uid })
    .then(artist => {
      artist.artistSchedule.forEach((e, index) => {
        if (e.id.toString() == req.params.scheduleId) {
          artist.artistSchedule.splice(index, 1)
        }
      })
      artist.save(err => {
        if (err) {
          return res.status(400).send(err)
        }
        res.send("Successfully Deleted")
      })
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})


module.exports = router