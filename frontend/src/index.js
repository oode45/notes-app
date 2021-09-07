import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {Router} from "react-router-dom"
import {NotificationContainer} from "react-notifications"
import history from "./store/history"
import store from './store/configureStore'
import App from './App'

import 'react-notifications/lib/notifications.css'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NotificationContainer/>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)


