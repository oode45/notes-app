import React from 'react';
import Button from "@material-ui/core/Button";

const Subscriber = (props) => {
    const buttonText = props.type==='subscribe'?'Add':'Remove'
    return (
        <div>
            <div>{props.username} <Button onClick={() => {
                props.subscribe(props.id)
            }}>{buttonText}</Button></div>
        </div>
    );
};

export default Subscriber;