import React from 'react';
import {StarshipList} from '../sw-components/item-lists';
import {useNavigate, useParams} from "react-router-dom";
import Row from "../row/row";
import StarshipDetails from "../sw-components/starship-details";

const StarshipsPage = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <Row
      left={<StarshipList onItemSelected={(itemId) => navigate(`/starships/${itemId}`)} />}
      right={<StarshipDetails itemId={id} />}
    />
  );
}
export default StarshipsPage