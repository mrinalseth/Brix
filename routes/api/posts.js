const express = require('express')
const Post = require('../../models/Post')
const mongoose = require('mongoose')
const passport = require('passport')

const router = express.Router()

// --------------------------------------------------------

router.post('/', passport.authenticate('jwt',{session: false}), async(req, res) => {
    const newPost = new Post({
        text: req.body.text,
        mediaLink:req.body.mediaLink,
        mediaType:req.body.mediaType,
        user: req.user.id
    })
    try {
        await newPost.save()
        res.status(200).json(newPost)
    }catch(err) {
        return res.status(400).json(err)
    }  
})

router.get('/', passport.authenticate('jwt',{session: false}), async(req, res) => {
    const posts = await Post.find({user: req.user})
    res.json(posts)
})



module.exports = router;