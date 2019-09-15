import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarouselPage from './Carousel';
import { Jumbotron, Button } from 'reactstrap';
import logo from '../imgs/smalllogo.png';
import Library from './Library';
import Train from './Train';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabKey: "/home"
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tabKey) {
      this.setState({ tabKey : tabKey });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
        <img src={logo} style={{width:100, marginTop: -7}} />
          <Navbar.Brand href="/home"></Navbar.Brand>
          <Nav
            activeKey="/home"
            onSelect={selectedKey => this.handleClick(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="/home">PlaceHolder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about-link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Library</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Train</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        {
           this.state.tabKey == "/home" &&     
           <div className="container">
             <div class="jumbotron">
              <Jumbotron>
                <h1 className="display-3">PlaceHolder</h1>
                <p className="lead">The next best thing since sliced bread</p>
                <hr className="my-2" />
                <p>Waste less time searching for chairs and find space in a second</p>
                <Button size="lg"> Learn More
                </Button>
              </Jumbotron>
            </div>
             <br></br>
            <CarouselPage />
            <br></br>
            <br></br>
            <br></br>
           </div>
        }

        {
          this.state.tabKey == "about-link" && 
          <h1>please help</h1>
        }

        {
           this.state.tabKey == "link-1" &&
           <h3><div className="container">
            <Library />
          </div></h3>
        }

        {
          this.state.tabKey == "link-2" &&
          <h3><div className="container">
            <Train />
          </div></h3>
        }
      </div>
    )
  }
}

export default Navigation;