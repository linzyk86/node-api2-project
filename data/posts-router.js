const express = require("express")
const router = express.Router()

const posts = require("./db")


//works
router.post("/api/posts", (req, res) => {
    posts.insert(req.body)
        .then((post) => {
            res.status(201).json(post)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json
                ({
                    message: "error"
                })
        })
 
})

//works
router.post("/api/posts/:id/comments", (req, res) => {
    posts.insertComment(req.body)
    .then((comment)=>{
        res.json(comment)
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    })
})

//works
router.get("/api/posts", (req, res) => {
    posts.find()
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error"
            })
        })
})

//works
router.get("/api/posts/:id", (req, res) => {
    posts.findById(req.params.id)
        .then((posts) => {
            if (posts) {
                res.status(200).json(posts)
            } else {
                res.status(400).json({
                    messgae: ""
                })
            }
        })
})

//works
router.get("/api/posts/:id/comments", (req, res) => {
    posts.findPostComments(req.params.id, req.body)
    .then((comments)=>{
        res.status(200).json(comments)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//works
router.delete("/api/posts/:id", (req, res) => {
    posts.remove(req.params.id)
    .then((post)=>{
        res.status(200).json({
            message: "The user has been deleted"
        })
        .catch((error)=>{
            res.status(500).json({
                message: "Error"
            })
        })
    })
})


//works
router.put("/api/posts/:id", (req, res) => {
    posts.update(req.params.id, req.body)
    .then((post)=>{
        res.status(200).json(post)
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    })
})

module.exports = router