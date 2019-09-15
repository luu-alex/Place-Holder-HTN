import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import floorplan from '../imgs/floorplan3.png';
import redfloorplan from '../imgs/redfloorplan3.png';

export default class Train extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      on : floorplan
  	};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(on) {
  	  if(this.state.on == floorplan) this.setState({ on : redfloorplan});
  	  else this.setState({ on : redfloorplan});
      //this.setState({ on : on });
  }

  render() {

  		return (
  			<div>
				<Button onClick={this.handleClick}>press me</Button> 
                <Image src={this.state.on} fluid/>
          <br></br>
          <br></br>
          </div>
     )
 }
}
