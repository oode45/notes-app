import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import React from "react";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(1, 0, 2, 1),
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const InputForm = (props) => {
    const classes = useStyles()
    return (
        <Box color="text.primary" mt={2}>
            <form onSubmit={props.emit} noValidate>
                <Container className={classes.form}>
                    <TextField id="outlined-basic" label="User name" name="name" variant="outlined"/>
                    <TextField id="outlined-basic" label="Password" name="password" variant="outlined"/>
                    <Button variant="contained" className={classes.submit}
                            type="submit">{props.typeOfAuthorization}</Button>
                </Container>
            </form>

        </Box>
    );
};

export default InputForm;