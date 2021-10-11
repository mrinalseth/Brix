const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true,
    },
    mediaLink: {
        type:String
    },
    mediaType: {
        type:String
    }
})
module.exports = Post = mongoose.model('Post',PostSchema)