const CardItem = require('../database/models/CardItem')
const express = require('express')

const mainPage = express.Router()

mainPage.get('/card_items',async (req, res) => {
    try {
        const cardItem = await CardItem.find()
        if(cardItem) {
            return res.send(cardItem)
        }
        else res.send({error: 'cards array is empty'})
    }catch (e){
        res.send(e)
    }
})

module.exports = mainPage