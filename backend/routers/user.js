const User = require('../database/models/User')
const config = require('../config')
const {nanoid} = require("nanoid")
const express = require('express')
const axios = require("axios")

const user = express.Router()

user.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username})
    if (!user) return res.status(400).send({error: 'user not found'})
    user.checkPassword(req.body.password).then(async pass => {

        if (pass) {
            user.generateToken()
            await user.save()
            return res.send({user})
        } else {
            return res.sendStatus(400)
        }
    })
})

user.post('/signup', async (req, res) => {
    const userBody = req.body
    try {
        const user = new User(userBody)
        user.generateToken()
        await user.save()
        return res.send({user})
    } catch (e) {
        return res.send(e)
    }
})

user.post('/facebookLogin', async (req, res) => {
    const inputToken = req.body.accessToken;
    const accessToken = config.facebook.appId + '|' + config.facebook.appSecret;
    const debugTokenUrl = `https://graph.facebook.com/debug_token?input_token=${inputToken}&access_token=${accessToken}`;

    try {
        const response = await axios.get(debugTokenUrl)
        if (response.data.data.error) {
            return res.status(401).send({global: 'Facebook token incorrect'})
        }

        if (response.data.data['user_id'] !== req.body.id) {
            return res.send({global: 'User ID incorrect'});
        }

        let user = await User.findOne({username: req.body.email});

        if (!user) {
            user = await User.findOne({facebookId: req.body.id});
        }
        if (!user) {
            user = new User({
                username: req.body.name || nanoid(),
                password: nanoid(),
                facebookId: req.body.id,
            });
        }
        user.generateToken();
        await user.save();

        res.send({message: 'Success', user});
    } catch (e) {
        return res.send(e)
    }
})

user.post('/add', async (req, res) => {
    const id = req.body.id
    try {
        const token = req.get('Authorization')
        if (!token) return res.send('invalid token')
        const user = await User.findOne({token: token})
        user.friends.push(id)

        await user.save()
        res.send({user})
    } catch (e) {
        return res.send(e)
    }
})

user.post('/remove', async (req, res) => {
    const id = req.body.id
    try {
        const token = req.get('Authorization')
        if (!token) return res.send('invalid token')
        const user = await User.findOne({token: token})
        user.friends.splice(id,1)

        await user.save()
        res.send({user})
    } catch (e) {
        return res.send(e)
    }
})



user.delete('/sessions', async (req, res) => {
    const token = req.get('Authorization');
    const success = {message: 'Success'};

    if (!token) return res.send(success);

    const user = await User.findOne({token});

    if (!user) return res.send(success);

    user.generateToken();

    await user.save();

    return res.send(success);
})


module.exports = user