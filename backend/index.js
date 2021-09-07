require('dotenv').config()
const posts = require('./routers/posts')
const exitHook = require('async-exit-hook')
const user = require('./routers/user')
const mainPage = require('./routers/mainPage')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config')

app.use(cors())
app.use(express.json())
app.use('/user', user)
app.use('/posts', posts)
app.use('/', mainPage)


const run = async () => {
    await mongoose.connect(config.db.url, {useNewUrlParser: true})

    exitHook(async callback => {
        await mongoose.disconnect()
        callback()
    })
    app.listen(config.port, () => {
        console.log(`server is running on ${config.port} port`)
    })
}

run().catch(console.error)

