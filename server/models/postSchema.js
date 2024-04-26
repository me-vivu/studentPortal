const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    user_id: { type: mongoose.Types.ObjectId },
    caption: String,
    datePosted: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: [{
        userId: { type: mongoose.Types.ObjectId },
        comment: { type: String }
    }],
    file: String
    

});

const Post = mongoose.model('posts', postSchema)

module.exports = Post