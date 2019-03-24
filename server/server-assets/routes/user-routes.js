let router = require('express').Router()
let User = require('../models/user')

//DELETE - DELETE A USER                                                 working
router.delete('/:id', (req, res, next) => {
  User.findOne({ _id: req.params.id && req.session.uid }) // , userId: 
    .then(user => {
      if (!user._id.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!!!")
      }
      user.remove(err => {
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

module.exports = router