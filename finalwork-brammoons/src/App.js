import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";
import Agenda from './AgendaTest';
import Planning from './Planning';

class App extends Component {

  componentDidMount() {
    console.log(process.env.REACT_APP_API_URL);
  }

  render() {
    return(
      <HashRouter>
        <div>
          <h1>Final Work Bram Moons.</h1>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Agenda">Agenda</NavLink></li>
            <li><NavLink to="/Planning">Planning</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Landing" component={Landing} />
            <Route path="/Agenda" component={Agenda} />
            <Route path="/Planning" component={Planning} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;