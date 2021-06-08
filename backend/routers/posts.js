const express = require('express')
const Post = require('../database/models/Posts')
const User = require('../database/models/User')

const router = express.Router()

async function getFriendsPostsId(user) {
    const friendPosts = []
    if (user.friends) {
        for (let i = 0; i < user.friends.length; i++) {
            const friend = await User.findOne({'_id': user.friends[i]}, 'posts') || {posts: []}
            friendPosts.push(...friend.posts)
        }
    }
    return friendPosts;
}

router.post('/', async (req, res) => {
    const token = req.get('Authorization')
    if (!token) return res.send('invalid token')

    const post = req.body
    const user = await User.findOne({token: token})

    if (!user) return res.send('user not exist')

    try {
        const row = new Post({post: post.textData, date: new Date(), author: user.username})
        await row.save()
        user.posts.push(row._id)
        await user.save()

        return res.send(row)
    } catch (e) {
        return res.send('server error')
    }
})

router.get('/', async (req, res) => {
    const token = req.get('Authorization')
    if (!token) return res.send('invalid token')
    const user = await User.findOne({token: token})

    if (!user) return res.send('user not exist')
    try {
        const friendPosts = await getFriendsPostsId(user);
        const posts = await Post.find({'_id': [...user.posts, ...friendPosts]})
        const userList = await User.find({'_id': user.friends}, 'username')
        const allUserList = await User.find({'_id': {$nin:user._id}}, 'username')
        console.log(allUserList)
        return res.send({posts, userList, allUserList})
    } catch (e) {
        return res.send('server error')
    }
})

router.delete('/:id', async (req, res) => {
    const token = req.get('Authorization')
    if (!token) return res.send('invalid token')
    const user = await User.findOne({token: token})

    if (!user) return res.send('user not exist')

    try {
        await Post.deleteOne({_id: req.params.id})
        user.posts = user.posts.filter(id => id != req.params.id)
        await user.save()
        const friendPosts = await getFriendsPostsId(user);
        const posts = await Post.find({'_id': [...user.posts, ...friendPosts]})
        return res.send(posts)
    } catch (e) {
        return res.send('server error')
    }
})

module.exports = router