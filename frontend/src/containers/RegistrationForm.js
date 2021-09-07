import {registerRequest} from "../store/actions/userActions"
import Container from "@material-ui/core/Container"
import InputForm from "../components/inputForm"
import {useDispatch} from "react-redux"
import React from "react"

const RegistrationForm = () => {
    const dispatch = useDispatch()

    const sendForm = event => {
        event.preventDefault()
        dispatch(registerRequest({
            username: event.target.name.value,
            password: event.target.password.value
        }))
    }

    return (
        <Container component="section" maxWidth="xs">
            <InputForm emit={(e) => {
                sendForm(e)
            }} typeOfAuthorization={"Registration"}/>
        </Container>
    );
};

export default RegistrationForm
