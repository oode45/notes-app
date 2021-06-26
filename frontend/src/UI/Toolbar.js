import React from 'react';
import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AnonymousMenu from "./AnonymousMenu";
import UserMenu from "./UserMenu";

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
    staticToolbar: {
        marginBottom: theme.spacing(2)
    }
}));

const AppToolbar = () => {
    const classes = useStyles();
    const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="h6">
                                <Link to="/" className={classes.mainLink}>Todos</Link>
                            </Typography>
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
    );
};

export default AppToolbar;