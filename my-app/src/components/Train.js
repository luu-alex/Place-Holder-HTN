import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import red from './redchair.png';
import green from './greenchair.png';
export default class Train extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      on : red
  	};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(on) {
  	  if(this.state.on == red) this.setState({ on : green});
  	  else this.setState({ on : red});
      //this.setState({ on : on });
  }

  render() {

  		return (
  			<div>
				<Button onClick={this.handleClick}>press me</Button> 
     <Container>
        <Row>
      <Col xs={6} md={4}>
        <Image src={this.state.on} />
      </Col>
      <Col xs={6} md={4}>
        <Image src={red} />
      </Col>
      <Col xs={6} md={4}>
        <Image src={red} />
      </Col>
      <Col xs={6} md={4}>
        <Image src={red} />
      </Col>
      <Col xs={6} md={4}>
        <Image src={red} />
      </Col>
      <Col xs={6} md={4}>
        <Image src={red} />
      </Col>
          </Row>
          </Container>
          </div>
     )
 }
}
