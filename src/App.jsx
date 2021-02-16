import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

const App = () => (
  <Router>
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </main>
      </div>
    </Provider>
  </Router>
);

export default App;
