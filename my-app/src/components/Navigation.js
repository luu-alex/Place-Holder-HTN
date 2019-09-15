import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          <Navbar.Brand href="#home">Placeholder</Navbar.Brand>
          <Nav
            activeKey="/home"
            onSelect={selectedKey => this.handleClick(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
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
           <h2>NONCY</h2>
        }

        {
           this.state.tabKey == "link-1" &&
           <h3>hello</h3>
        }

        {
          this.state.tabKey == "link-2" &&
          <h3>Hello</h3>
        }
      </div>
    )
  }
}

export default Navigation;