const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    post_id: { type: String, required: true },
    User_id: {type: String},
    description: String,
    author: { type: String, ref: "User_id" },
    datePosted: Date,
    file :{data: Buffer, contentType: String},
    reply: [{ type: String, ref: 'Reply'}],
    tag: [ {type: String} ]

});

const Post = mongoose.model('posts', postSchema)


module.exports = Post