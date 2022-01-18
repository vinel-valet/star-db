import React, {useState} from "react";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import './people-page.css'
import SwapiService from "../../services/swapi-service";

const PeoplePage = () => {

  const [selectedPerson, onPersonSelected] = useState(3)
  const swapiService = new SwapiService();

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList
          onItemSelected={onPersonSelected}
          getData={swapiService.getAllPeople}
        />
      </div>
      <div className="col-md-6">
        <ItemDetails itemId={selectedPerson}/>
      </div>
    </div>
  )
}
export default PeoplePage;