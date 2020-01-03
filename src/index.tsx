import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import history from './history'
import App from './App'
import * as serviceWorker from './serviceWorker';
import store, { persistor } from './store';

/* tslint:disable */
if (process.env.NODE_ENV !== 'development') {
    console.log = (): void => {}
    console.info = (): void => {}
    console.warn = (): void => {}
    console.error = (): void => {}
}

ReactDOM.render(
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
            <App />
        </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root') as HTMLElement
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();