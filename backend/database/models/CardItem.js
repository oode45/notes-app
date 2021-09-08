const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CardItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

const CardItem = mongoose.model("cardItem", CardItemSchema)
module.exports = CardItem