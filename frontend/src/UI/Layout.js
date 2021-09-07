import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import PropTypes from 'prop-types'
import AppToolbar from "./Toolbar"
import React from 'react'


const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <header>
                <AppToolbar/>
            </header>
            <main>
                <Container maxWidth="xl">
                    {children}
                </Container>
            </main>
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.object
}
