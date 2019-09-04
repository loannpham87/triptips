const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    caption: String,
    imageUrl: String,
    image_id: String,
    profilePic: String, default: 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png' ,
    userId: Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Post', postSchema);