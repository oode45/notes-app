import {useDispatch} from "react-redux";
import InputForm from "../components/inputForm";
import React from "react";
import {loginRequest} from "../store/actions/userActions";
import FacebookLogin from "../UI/FacebookLogin";
import Container from "@material-ui/core/Container";


const LogInForm = (props) => {
    const dispatch = useDispatch()

    const sendForm = event => {
        event.preventDefault()
        dispatch(loginRequest({
            username: event.target.name.value,
            password: event.target.password.value
        }))

    }

    return (
        <>
            <Container component="section" maxWidth="xs">
                <InputForm emit={(e) => {
                    sendForm(e)
                }} typeOfAuthorization={"Log in"}/>
                <FacebookLogin/>
            </Container>
        </>
    );
};

export default LogInForm;