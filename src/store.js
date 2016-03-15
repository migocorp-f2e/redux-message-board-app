import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import msgApp from './reducers';

export default (initialState) => {
  const store = compose(
      applyMiddleware(
          thunk
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(msgApp, initialState);

  return store;
};
