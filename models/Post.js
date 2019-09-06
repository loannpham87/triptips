const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    image_id: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png' 
    },
    userId: Schema.Types.ObjectId,
    followers: [Schema.Types.ObjectId],
	following: [Schema.Types.ObjectId],
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Post', postSchema);