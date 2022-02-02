import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';
import MyContext from '../swapi-service-context/swapi-service-context';
import './app.css';
import {Route, Routes} from 'react-router-dom';


const App = () => {

  const swapiService = new SwapiService()

  return (
    <ErrorBoundry>
      <MyContext.Provider value={swapiService}>
        <div className="stardb-app">
          <Header/>
          <RandomPlanet/>

          <Routes>
            <Route path="/people/*" element={<PeoplePage/>}/>
            <Route path="/people/:id" element={<PeoplePage/>}/>
            <Route path="/planets/*" element={<PlanetsPage/>}/>
            <Route path="/planets/:id" element={<PlanetsPage/>}/>
            <Route path="/starships/*" element={<StarshipsPage/>}/>
            <Route path="/starships/:id" element={<StarshipsPage/>}/>
          </Routes>

        </div>
      </MyContext.Provider>
    </ErrorBoundry>
  );
}


export default App

