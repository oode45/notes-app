import {useDispatch} from "react-redux";
import InputForm from "../components/inputForm";
import React from "react";
import {
    loginRequest,
    loginSuccess,
    logoutSuccess, registerRequest
} from "../store/actions/userActions"
import Container from "@material-ui/core/Container";

const RegistrationForm = (props) => {
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

export default RegistrationForm;