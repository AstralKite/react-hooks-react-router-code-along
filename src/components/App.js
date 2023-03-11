import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Messages from "./Messages";
import Signup from "./Signup";
import NavBar from "./NavBar";


function App() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }

  export default App;