/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import ProfileScreen from './screens/ProfileScreen';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  // let user = null;
  let user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //!!user is LOGGEDIN
        //* LOGIN
        // alert(userAuth);
        dispatch(
          login({
            //payload
            uid: userAuth.uid,
            uemail: userAuth.email,
          })
        );
        // user = "raja"; wring
      } else {
        //!! user is not LOGGED IN
        //* LOGOUT
        dispatch(logout);
      }
    });

    //! goodto return
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/test">
              <h1>hello</h1>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
