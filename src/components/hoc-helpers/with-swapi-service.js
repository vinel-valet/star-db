import React from 'react';
import MyContext from '../swapi-service-context/swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <MyContext.Consumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </MyContext.Consumer>
    );
  }
};

export default withSwapiService;