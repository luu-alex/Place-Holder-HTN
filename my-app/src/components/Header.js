import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const Main = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">PlaceHolder</h1>
        <p className="lead">The next best thing since sliced bread</p>
        <hr className="my-2" />
        <p>Waste less time searching for chairs and find space in a second</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Main;