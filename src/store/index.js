// THIS FILE IS FOR CREATING THE STORE, APPLYING MIDDLEWARE AND CONNECTING TO REDUCERS
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
