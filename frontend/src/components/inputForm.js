import makeStyles from "@material-ui/core/styles/makeStyles"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Box from '@material-ui/core/Box'
import PropTypes from "prop-types"
import React from "react"

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(1, 0, 2, 1),
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

const InputForm = ({emit, typeOfAuthorization}) => {
    const classes = useStyles()
    return (
        <Box color="text.primary" mt={2}>
            <form onSubmit={emit} noValidate>
                <Container className={classes.form}>
                    <TextField id="outlined-basic" margin="dense" label="User name" name="name" variant="outlined"/>
                    <TextField id="outlined-basic" margin="dense" label="Password" name="password" variant="outlined"/>
                    <Button variant="contained" className={classes.submit}
                            type="submit">{typeOfAuthorization}</Button>
                </Container>
            </form>

        </Box>
    )
}

export default InputForm

InputForm.propTypes = {
    emit: PropTypes.func,
    typeOfAuthorization: PropTypes.string
}
