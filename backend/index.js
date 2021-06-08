require('dotenv').config()
const posts = require('./routers/posts')
const exitHook = require('async-exit-hook')
const user = require('./routers/user')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8000

app.use(cors())
app.use(express.json())
app.use('/user', user)
app.use('/posts', posts)


const run = async () => {
    await mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})

    exitHook(async callback => {
        await mongoose.disconnect()
        callback()
    })
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT} port`)
    })
}

run().catch(console.error)

