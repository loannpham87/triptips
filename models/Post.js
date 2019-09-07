const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    }
});

module.exports = Post = mongoose.model("post", PostSchema);