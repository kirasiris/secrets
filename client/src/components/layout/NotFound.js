import React, { Fragment } from 'react';

const NotFound = () => {
  const JumbotronStyling = {
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    margin: 'auto'
  };
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid" style={JumbotronStyling}>
        <div className="container">
          <h1 className="display-3">404 ERROR!!</h1>
          <p className="lead">Sorry, this page does not exists.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
