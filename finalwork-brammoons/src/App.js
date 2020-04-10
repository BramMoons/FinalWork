//This creates the feel that you are using different pages, while you are actually using just 1 html file
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";
import Calendar from './Calendar';
import Agenda from './AgendaTest';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <h1>Final Work Bram Moons. Work In progress.</h1>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Landing">Landing</NavLink></li>
            <li><NavLink to="/Calendar">Calendar</NavLink></li>
            <li><NavLink to="/Agenda">Agenda</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Landing" component={Landing} />
            <Route path="/Calendar" component={Calendar} />
            <Route path="/Agenda" component={Agenda} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;