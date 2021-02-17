import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authReducer';
import postReducer from './post/postReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));

// store.dispatch(fetchAuth());
export const persistor = persistStore(store);
