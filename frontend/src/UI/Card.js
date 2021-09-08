import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 150,
        margin: 10,
        display: 'flex'
    },
    media: {
        height: 100,
    },
});

const CardMenu = ({title, cardText, image}) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h7" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cardText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardMenu

CardMenu.propTypes = {
    title: PropTypes.string,
    cardText: PropTypes.string,
    image: PropTypes.string,
}
