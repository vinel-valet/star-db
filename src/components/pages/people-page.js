import React from 'react';
import {PersonList, PlanetList} from '../sw-components/item-lists';
import {useNavigate, useParams} from "react-router-dom";
import Row from "../row/row";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <Row
      left={<PersonList onItemSelected={(itemId) => navigate(`/people/${itemId}`)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
}


export default PeoplePage