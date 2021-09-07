import React from "react"
import {Route, Switch} from "react-router-dom"
import Layout from "./UI/Layout"
import Register from "./containers/RegistrationForm"
import Login from "./components/logInForm"
import NotesPage from "./containers/NotesPage"


const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={NotesPage}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </Layout>
    )
}

export default App
