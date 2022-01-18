import React, {Component} from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import './app.css';
import PeoplePage from "../people-page/people-page";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <RandomPlanet/>
        <PeoplePage/>
      </div>
    );
  }
};
