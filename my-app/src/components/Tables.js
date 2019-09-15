import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Up from '../imgs/up.png';
import Right from '../imgs/right.png';
import PinkRight from '../imgs/pinkRight.png';
import PinkLeft from '../imgs/pinkLeft.png';
import Left from '../imgs/left.png';
import White from '../imgs/white.png';
import Table from '../imgs/table.jpg';
import Bookshelf from '../imgs/bookshelf.png';

export default class Tables extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	four: false,
			fourteen: false
    	};
    }
	componentDidMount() {
		this.timer = setInterval(() =>
        fetch('https://f57b8aeb.ngrok.io/data').then(response => response.json()).then(data => {
			for(let j = 0; j < data.length; j++) {
				console.log(data);
				if(data[j].seat.number == "4"){
					if(data[j].seat.underPressure) {
						this.setState({"four": true})
					} else {
						this.setState({"four": false})
					}
				}
				if(data[j].seat.number =="14") {
					if(data[j].seat.underPressure) {
						this.setState({"fourteen": true})
					} else {
						this.setState({"fourteen": false})
					}
				}
			}
			console.log(data)
	    }), 7000);
	}
	render() {
        const { size } = this.props;
		const { four, fourteen } = this.state;
		return (
			<div style={{backgroundColor:"#90BEFF"}}>
				<Container style={{backgroundColor:"#90BEFF"}}>
				<Row>
                      <Col xs={2} md={size[0]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[1]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[2]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[3]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[4]} style={{paddingLeft:"120px"}}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[5]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                  </Row>
                <Row>
                      <Col xs={2} md={size[0]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[1]}>
                        <Image src={Up} style={{width: 50, height: 50}}/>
                      </Col>
                      <Col xs={2} md={size[2]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[3]}>
                      <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                      </Col>
                      <Col xs={2} md={size[4]} style={{paddingLeft:"120px"}}>
					  {!four ?
                      <Image src={Right} style={{width: 50, height: 50}}/> :
                      <Image src={PinkRight} style={{width: 50, height: 50}}/>}
                      </Col>
                      <Col xs={2} md={size[5]}>
                      <Image src={Table} style={{width: 120, height: 50}}/>
                      </Col>
                </Row>
                <Row>
                        <Col xs={2} md={size[0]} style={{paddingLeft:"120px"}}>
                        <Image src={Right} style={{width: 50, height: 50}}/>
                        </Col>
                        <Col xs={2} md={size[1]}>
                          <Image src={Table} style={{width: 150, height: 50}}/>
                        </Col>
                        <Col xs={2} md={size[2]}>
                        <Image src={Left} style={{width: 50, height: 50}}/>
                        </Col>
                        <Col xs={2} md={size[3]}>
                        <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                        </Col>
                        <Col xs={2} md={size[4]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                        <Col xs={2} md={size[5]}>
                        <Image src={Up} style={{width: 50, height: 50}}/>
                        </Col>
                </Row>
                <Row>
                      <Col xs={2} md={size[0]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[1]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[2]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[3]}>
                      <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                      </Col>
                      <Col xs={2} md={size[4]}>
                      <Image src={White} style={{width: 1, height: 1}}/>
                      </Col>
                      <Col xs={2} md={size[5]} style={{paddingUp:"120px"}}>
                      <Image src={Up} style={{width: 50, height: 50}}/>
                      </Col>
                  </Row>
                  <Row>
                        <Col xs={2} md={size[0]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                        <Col xs={2} md={size[1]}>
                          <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                        <Col xs={2} md={size[2]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                        <Col xs={2} md={size[3]}>
                        <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                        </Col>
                        <Col xs={2} md={size[4]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                        <Col xs={2} md={size[5]}>
                        <Image src={White} style={{width: 1, height: 1}}/>
                        </Col>
                    </Row>
                    <Row>
                          <Col xs={2} md={size[0]}>
                          <Image src={White} style={{width: 1, height: 1}}/>
                          </Col>
                          <Col xs={2} md={size[1]}>
                            <Image src={Up} style={{width: 50, height: 50}}/>
                          </Col>
                          <Col xs={2} md={size[2]}>
                          <Image src={White} style={{width: 1, height: 1}}/>
                          </Col>
                          <Col xs={2} md={size[3]}>
                          <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                          </Col>
                          <Col xs={2} md={size[4]} style={{paddingLeft:"120px"}}>
                          <Image src={Right} style={{width: 50, height: 50}}/>
                          </Col>
                          <Col xs={2} md={size[5]}>
                          <Image src={Table} style={{width: 120, height: 50}}/>
                          </Col>
                      </Row>
                      <Row>
                            <Col xs={2} md={size[0]} style={{paddingLeft:"120px"}}>
                            <Image src={Right} style={{width: 50, height: 50}}/>
                            </Col>
                            <Col xs={2} md={size[1]}>
                              <Image src={Table} style={{width: 150, height: 50}}/>
                            </Col>
                            <Col xs={2} md={size[2]}>
	  					  {!fourteen ?
	                        <Image src={Left} style={{width: 50, height: 50}}/> :
	                        <Image src={PinkLeft} style={{width: 50, height: 50}}/>}
                            </Col>
                            <Col xs={2} md={size[3]}>
                            <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                            </Col>
                            <Col xs={2} md={size[4]}>
                            <Image src={White} style={{width: 1, height: 1}}/>
                            </Col>
                            <Col xs={2} md={size[5]}>
                            <Image src={Up} style={{width: 50, height: 50}}/>
                            </Col>
                        </Row>
                        <Row>
                              <Col xs={2} md={size[0]}>
                              <Image src={White} style={{width: 1, height: 1}}/>
                              </Col>
                              <Col xs={2} md={size[1]}>
                                <Image src={White} style={{width: 1, height: 1}}/>
                              </Col>
                              <Col xs={2} md={size[2]}>
                              <Image src={White} style={{width: 1, height: 1}}/>
                              </Col>
                              <Col xs={2} md={size[3]}>
                              <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                              </Col>
                              <Col xs={2} md={size[4]}>
                              <Image src={White} style={{width: 1, height: 1}}/>
                              </Col>
                              <Col xs={2} md={size[5]}>
                              <Image src={Up} style={{width: 50, height: 50}}/>
                              </Col>
                          </Row>
                          <Row>
                                <Col xs={2} md={size[0]}>
                                <Image src={White} style={{width: 1, height: 1}}/>
                                </Col>
                                <Col xs={2} md={size[1]}>
                                  <Image src={White} style={{width: 1, height: 1}}/>
                                </Col>
                                <Col xs={2} md={size[2]}>
                                <Image src={White} style={{width: 1, height: 1}}/>
                                </Col>
                                <Col xs={2} md={size[3]}>
                                <Image src={Bookshelf} style={{width: 100, height: 50}}/>
                                </Col>
                                <Col xs={2} md={size[4]}>
                                <Image src={White} style={{width: 1, height: 1}}/>
                                </Col>
                                <Col xs={2} md={size[5]}>
                                <Image src={Table} style={{width: 120, height: 50}}/>
                                </Col>
                            </Row>

		        </Container>
		    </div>
		)
	}
}
