const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const keys = require('../../config/keys')

// ----------------------------------------------------

router.post('/signup', async(req, res) => {
    const existingUser = await User.findOne({email: req.body.email})
    if (existingUser) {
        return res.status(400).json('User alread exist')
    }

    const newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async(err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          try {
              await newUser.save()
              res.status(200).json(newUser)
          }catch(err) {
              return res.status(400).json(err)
          }
        });
    });
})

router.post('/login', async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email})
    if(!user) {
        return res.status(404).json('No user found')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const payload = {
            id: user.id,
            name: user.name
        }
        jwt.sign(payload, keys.secretOrKey, async(err, token) => {
            return res.json({
                success: true,
                token: `Bearer ${token}`
            })
        })
    }else{
        return res.status(400).json('Incorrect password')
    }
})

router.get('/', passport.authenticate('jwt', {session:false}), async (req, res) => {
    return res.json(req.user)
})

// ----------------------------------------------------
module.exports = router