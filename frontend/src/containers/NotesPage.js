import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fetchPosts, postSuccess, sendPost, removePost} from "../store/actions/postActions";
import Post from "../components/post";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Subscriber from "../components/subscriber";
import {subscribeRequest, unSubscribeRequest} from "../store/actions/userActions"
import * as Sentry from "@sentry/react";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(1, 0, 2, 1),
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        width: '600px'
    },
    postbox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

const NotesPage = () => {
    const user = useSelector(state => state.users.user)
    const posts = useSelector(state => state.posts.postsList)
    const friendsList = useSelector(state => state.posts.usersList)
    const allUsersList = useSelector(state => state.posts.allUsersList)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(
        () => {
            dispatch(fetchPosts())
        }, [dispatch]
    )
    const sendCurrentPost = event => {
        event.preventDefault()
        dispatch(sendPost({textData: event.target.text.value}))
    }

    const deletePost = id => {
        dispatch(removePost(id))
    }
    const subscribe = id => {
        dispatch(subscribeRequest(id))
        dispatch(fetchPosts())
    }

    const unSubscribe = id => {
        dispatch(unSubscribeRequest(id))
        dispatch(fetchPosts())
    }

    return (
        <div>
            <h2>Hello, {user ? user.username : 'Anonymous'}</h2>
            <Box color="text.primary">
                {allUsersList && user ?
                    <div>
                        {allUsersList.map(user => {
                            if (friendsList.find(friend => friend._id === user._id)){
                                return <Subscriber username={user.username} id={user._id} key={user._id} subscribe={unSubscribe}
                                type={'unsubscribe'}/>
                            }
                            else {
                                return <Subscriber username={user.username} id={user._id} key={user._id} subscribe={subscribe}
                                type={'subscribe'}/>
                            }
                        })}
                    </div> :
                    ''
                }
            </Box>
            <Box color="text.primary" className={classes.postbox} mt={2}>
                {posts && user ?
                    <div>
                        {posts.map(post => {
                            return <Post date={post.date} text={post.post} user={user.username}
                                         key={post._id} id={post._id} username={post.author} deletePost={deletePost}/>
                        })}
                    </div>
                    : 'Log in or register'}
            </Box>


            <Box color="text.primary" className={classes.box} mt={2} onSubmit={sendCurrentPost}>
                <form noValidate className={classes.form}>
                    <TextField id="filled-full-width" InputLabelProps={{shrink: true}}
                               variant="filled" label="Text" fullWidth name="text" variant="outlined"/>
                    <Button variant="contained" className={classes.submit} type="submit">Send</Button>
                </form>
            </Box>
        </div>
    )
}

export default NotesPage