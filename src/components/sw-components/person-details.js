import React, {useEffect} from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import {useParams} from "react-router-dom";

const PersonDetails = (props) => {

  return (
    <ItemDetails {...props} >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);