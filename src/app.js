import './common/lib';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import msgApp from './reducers';
import AppContainer from './containers/AppContainer';

import appMiddleware from 'appMiddleware';

/* use redux devTools of chrome extension */
const finalCreateStore = compose(
    applyMiddleware(appMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(msgApp);

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
