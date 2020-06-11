import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Agenda from './AgendaTest';
import Asiel from './Asiel';
import AddAnimal from './AddAnimal';
import AddWalk from './addWalk';

class App extends Component {

  componentDidMount() {
    console.log(process.env.REACT_APP_API_URL);
  }

  render() {
    return(
      <HashRouter>
        <div>
          <div id="nav">
          <h1>Final Work Bram Moons.</h1>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Agenda">Agenda</NavLink></li>
              <li><NavLink to="/Asiel">Asiel</NavLink></li>
              <li><NavLink to="/AddAnimal">Dier toevoegen</NavLink></li>
              <li><NavLink to="/AddWalk">Wandeling toevoegen</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Agenda" component={Agenda} />
            <Route path="/Asiel" component={Asiel} />
            <Route path="/AddAnimal" component={AddAnimal} />
            <Route path="/AddWalk" component={AddWalk} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;