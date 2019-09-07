const express = require("express");
const router = express.Router();

//Load Post model
const Post = require("./../models/Post");

router.post("/upload", (req, res) => {
    const newPost = new Post ({
        userId: req.body.userId,
        title: req.body.title,
        userName: req.body.userName,
        picUrl: req.body.picUrl,
        caption: req.body.caption,
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => console.log(err));
});

router.get("/uploads", (req, res) => {
    Post.find()
        .then(posts => {
            console.log(posts);
            return res.json(posts);
        }).catch(err => console.log(err));
});

router.get("/uploads/:userId", (req, res) => {
    console.log(req.params.userId);
    Post.find({ userId: req.params.userId })
        .then(posts => {
            console.log(posts);
            return res.json(posts);
        }).catch(err => console.log(err));
})

module.exports = router;