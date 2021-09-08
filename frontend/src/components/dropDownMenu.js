import makeStyles from "@material-ui/core/styles/makeStyles"
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import CardMenu from '../UI/Card'
import PropTypes from 'prop-types'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    listMenu: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    commonMenu: {
        marginTop: '-15px',

    },

}))

const DropDownMenu = ({cardsArray}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.commonMenu}>
            <MenuList className={classes.listMenu}>
                {cardsArray.map((card, indexCard) => {
                    return <CardMenu key={indexCard} title={card.title} cardText={card.text} image={card.image} />
                })}
            </MenuList>
        </Paper>
    )
}

export default DropDownMenu

DropDownMenu.propTypes = {
    cardsArray: PropTypes.array
}
