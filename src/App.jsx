import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';
import { persistor, store } from './redux/store';
import Navbar from './Components/Navbar/Navbar';
import HorizontalNav from './Components/Navbar/HorizontalNav';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { PrivateRoutes, PublicRoutes } from './Components/Routes/PrivateRoutes';
import OtherProfile from './pages/Profile/OtherProfile';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <PublicRoutes path="/register" component={Register} />
              <PublicRoutes path="/login" component={Login} />
              <PrivateRoutes path="/profile" component={Profile} />
              <PrivateRoutes path="/user/:userId" component={OtherProfile} />
            </Switch>
          </main>
        </div>
      </Router>
    </PersistGate>
  </Provider>
);
export default App;
