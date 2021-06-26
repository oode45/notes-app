import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {NotificationContainer} from "react-notifications";
import history from "./store/history";
import store from './store/configureStore'
import App from './App';

import 'react-notifications/lib/notifications.css';
import './index.css';
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "https://fc5125d9cc5c4496b0e736735d333d80@o775887.ingest.sentry.io/5797222" })

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NotificationContainer/>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


