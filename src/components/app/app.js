import React, {useState} from 'react';
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
import StarshipDetails from "../sw-components/starship-details";
import PersonDetails from "../sw-components/person-details";


const App = () => {

  const swapiService = new SwapiService()
  const [itemId, setItemId] = useState(null)

  return (
    <ErrorBoundry>
      <MyContext.Provider value={swapiService}>

        <div className="stardb-app">
          <Header/>
          <RandomPlanet/>

          <Routes>
            <Route path="/people/*" element={<PeoplePage/>}/>
            <Route path="/people/:id" element={<PeoplePage
              itemId={itemId}
              funcPerson={setItemId}
            />}/>
            <Route path="/planets/*" element={<PlanetsPage/>}/>
            <Route path="/planets/:id" element={<PlanetsPage
              itemId={itemId}
              funcPlanet={setItemId}
            />}/>
            <Route path="/starships/*" element={<StarshipsPage/>}/>
            <Route path="/starships/:id" element={<StarshipsPage
              itemId={itemId}
              func={setItemId}
            />}/>
          </Routes>

        </div>
      </MyContext.Provider>
    </ErrorBoundry>
  );
}


export default App

