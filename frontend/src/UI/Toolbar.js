import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import AnonymousMenu from "./AnonymousMenu"
import {Link} from "react-router-dom"
import UserMenu from "./UserMenu"
import React from 'react'

import {hoverFunctionsButton} from "../store/actions/mainPageActions"

const useStyles = makeStyles(theme => ({
    mainLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit'
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    toolbarDropItem: {
        height: '100%',
        paddingTop: 300
    },

    functions: {
        '&:hover': {
            color: '#ffffff'
        },
    },
    subscribers: {
        marginLeft: theme.spacing(1)
    },
    strip: {
        height: 5,
        backgroundColor: '#ffffff',

    }
}));

const AppToolbar = () => {
    const classes = useStyles()
    const user = useSelector(state => state.users.user)
    const isFunctionsShow = useSelector(state => state.mainPage.isHoverFunctionsButton.isShow)
    const dispatch = useDispatch()

    const handleMouseOver = () => {
        dispatch(hoverFunctionsButton({isShow: true}))
    }

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container justify="space-between">

                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item className={classes.toolbarDropItem}>
                                    <Typography variant="h6">
                                        <Link to="/" className={classes.mainLink}>Todos</Link>
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.toolbarDropItem} onMouseOver={handleMouseOver}>
                                    <Typography variant="h6">
                                        <div className={classes.functions}>
                                            Functions
                                        </div>
                                    </Typography>
                                    {isFunctionsShow ?
                                        <div className={classes.strip}></div>: null}
                                </Grid>
                                <Grid item className={classes.toolbarDropItem}>
                                    <Typography variant="h6">
                                        <div onMouseOver={handleMouseOver}>
                                            Subscriptions
                                        </div>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item>
                            {user ? (
                                <UserMenu/>
                            ) : (
                                <AnonymousMenu/>
                            )}

                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    )
}

export default AppToolbar
