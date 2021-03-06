import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleware = [thunk];
const store = createStore(reducer,composeEnhancers(applyMiddleware(...middleware)))
export default store;