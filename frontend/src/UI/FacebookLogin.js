import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props'
import {loginFacebookRequest} from "../store/actions/userActions"
import FacebookIcon from '@material-ui/icons/Facebook'
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {faceBookId} from '../config'
import React from 'react'


const FacebookLogin = () => {
    const dispatch = useDispatch();

    const facebookResponse = response => {
        if (response.id) {
            dispatch(loginFacebookRequest(response));
        }
    }

    return (
        <FacebookLoginButton
            appId={faceBookId}
            fields="name,email,picture"
            render={props => (
                <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    startIcon={<FacebookIcon/>}
                    onClick={props.onClick}
                >
                    Login with Facebook
                </Button>
            )}
            callback={facebookResponse}
        />
    )
}

export default FacebookLogin
