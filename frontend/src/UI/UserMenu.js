import React from 'react';
import {Button} from "@material-ui/core";
import {logoutRequest} from "../store/actions/userActions";
import {useDispatch} from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Button onClick={() => dispatch(logoutRequest())} color="inherit">Log out</Button>
        </>
    );
};

export default UserMenu;