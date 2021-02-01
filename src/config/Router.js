import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../layout/home/Home";
import Projects from "../layout/projects/Projects";


export default function Pages() {
    return (
      <Router>
          <Header/>
          <Switch>
            <Route path="/project">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }