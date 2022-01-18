import React, { useEffect, useState} from 'react';
import './item-list.css';
import Spinner from "../spinner/spinner";

const ItemList = ({onItemSelected, getData}) => {

  const [itemList, setPeopleList] = useState(null);


  useEffect(() => {

    getData()
      .then((itemList) => {
        setPeopleList(itemList)
      })
  }, [])

  const renderPeopleList = () => (
    <ul className="item-list list-group">
      {itemList.map(({id, name}) => (
          <li className="list-group-item"
              key={id}
              onClick={() => onItemSelected(id)}>
            {name}
          </li>
        )
      )}
    </ul>
  );


  return (
    <>
      {!itemList ? <Spinner/> : renderPeopleList()}
    </>
  )
};
export default ItemList;