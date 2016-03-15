import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import msgApp from './reducers';

export default (initialState) => {
  	const store = compose(
      	applyMiddleware(
          	thunkMiddleware
      	),
      	window.devToolsExtension ? window.devToolsExtension() : f => f
  	)(createStore)(msgApp, initialState);

  	return store;
};
