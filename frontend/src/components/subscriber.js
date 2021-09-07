import Button from "@material-ui/core/Button"
import PropTypes from 'prop-types'
import React from 'react'

const Subscriber = ({type, username, subscribe, id}) => {
    const buttonText = type==='subscribe'?'Add':'Remove'
    return (
        <div>
            <div>{username} <Button onClick={() => {
                subscribe(id)
            }}>{buttonText}</Button></div>
        </div>
    )
}

Subscriber.propTypes = {
    type: PropTypes.string,
    username: PropTypes.string,
    subscribe: PropTypes.func,
    id: PropTypes.string

}

export default Subscriber
