import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';

const tall = 20; // tallness
const wide = 12; // wideness

export default class Library extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	color: Array(tall * wide).fill("red")
    	};

    	this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    	var arr = Array(tall * wide).fill("red")

    	if (this.state.color[68] == "green") {
    		this.setState({ color: arr });
    	} else {
    		arr[68] = "green";
    		this.setState({ color: arr });
    	}
    }

	render() {
		const seating = []

		var i;
		var j;
		var counter = 0;
		for(i = 0; i < tall; i++) {
			seating.push([]);

			for(j = 0; j < wide; j++) {
				seating[i].push(counter);
				counter = counter + 1;
			}
		}

		return (
			<div>
				<Button onClick={this.handleClick}>press me</Button>
				<Container>
					{
						seating.map((seats) =>
							<Row>
							{
								seats.map((seat) =>
									<Col style={{ backgroundColor: this.state.color[seat] }}>{seat + 1}</Col>
								)
							}
							</Row>
						)
					}
		        </Container>
		        <br></br>
		        <br></br>
		    </div>
		)	
	}
}