import React, {useContext} from 'react';
import MyContext from '../swapi-service-context/swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    const value = useContext(MyContext)
    const serviceProps = mapMethodsToProps(value);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  }
};

export default withSwapiService;