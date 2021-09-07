import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import PropTypes from "prop-types"
import React from 'react'

const useStyles = makeStyles({
    root: {
        marginBottom: 15
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Post({user, username, date, text, deletePost, id}) {
    const classes = useStyles()
    const isOwnPost = user === username
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {date} Author: {username}
                </Typography>
                <Typography variant="body2" component="p">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                {isOwnPost?<Button size="small" onClick={() => {
                    deletePost(id)
                }}>Delete</Button>:''}
            </CardActions>
        </Card>
    )
}


Post.propTypes = {
    user: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string,
    text: PropTypes.string,
    deletePost: PropTypes.func,
    id: PropTypes.string
}
