import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));

// store.dispatch(fetchAuth());
export default store;
