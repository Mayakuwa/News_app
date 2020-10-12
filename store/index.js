import { createStore, combineReducers } from 'redux';
import reducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
