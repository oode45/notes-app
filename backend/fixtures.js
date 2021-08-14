const mongoose = require('mongoose')
const config = require('./config')
const Post = require("./database/models/Posts")
const User = require("./database/models/User")

const run = async () => {
    await mongoose.connect(config.db.url, config.db.options)

    const collections = await mongoose.connection.db.listCollections().toArray()

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name)
    }

    const post1 = await Post.create({
        post: 'lorem ipsum dolor sit amet',
        date: new Date(),
        author: 'user1'
    })

    const post2 = await Post.create({
        post: 'dolor amet',
        date: new Date(),
        author: 'user2'
    })

    const post3 = await Post.create({
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vel?',
        date: new Date(),
        author: 'user3'
    })

    const user3 = await User.create({
        username: 'user3',
        password: '123',
        posts: [post3],
        friends: []
    })

    const user1 = await User.create({
        username: 'user1',
        password: '123',
        posts: [post1],
        friends: [user3]
    })
    const user2 = await User.create({
        username: 'user2',
        password: '123',
        posts: [post2],
        friends: [user1]
    })



    await mongoose.connection.close()
}

run().catch(e => {
    console.error(e)
    process.exit(1)
})
