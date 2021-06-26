import React from "react"
import {useSelector} from "react-redux"
import {Redirect, Route, Switch} from "react-router-dom"
import Layout from "./UI/Layout"
import Register from "./containers/RegistrationForm"
import Login from "./components/logInForm"
import NotesPage from "./containers/NotesPage";


const App = () => {
    const user = useSelector((state) => state.users.user)

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
