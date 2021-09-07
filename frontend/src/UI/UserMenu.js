import {logoutRequest} from "../store/actions/userActions"
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import React from 'react'

const UserMenu = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Button onClick={() => dispatch(logoutRequest())} color="inherit">Log out</Button>
        </>
    )
}

export default UserMenu
