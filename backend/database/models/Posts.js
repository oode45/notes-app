const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HistSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Posts = mongoose.model("posts", HistSchema)
module.exports = Posts