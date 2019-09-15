import React from 'react';
import { Jumbotron, Button} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import pi from './pi.jpg';
import group from './group.jpg';
export default class About extends React.Component {

	  render() {
  		return (
		<div className="container">
                <h1 className="display-3">About</h1>
                <p className="lead">Ever had to walk around a library floor for 30 minutes during finals season and still end up not finding a chair? PlaceHolder will assure you never have to face that tragedy again
                With the ever-growing population today, consumers are finding it increasingly frustrating to locate available seats at highly frequented locations. As students, this is an annoyance felt by all during exam season where seating is limited in the libraries. As commuters, the early morning rush is filled with crowded train carriages and only standing room remains. In food courts, shopper frequently spend up to 30 minutes looking for empty tables. PlaceHolder seeks to alleviate this problem by providing a portable device that can be used with all types of chairs detect if a seat is occupied or not and update the user in real time.
PlaceHolder combines the accuracy of FlexiPort pressure sensors and the fast processing speed of the Raspberry Pi 3 to receive real time information on open seats. Firebase is used for receiving and processing requests to store in the cloud database. When the sensor detects pressure on a chair, the user can immediately see the chair being taken on the PlaceHolder website. Using the application, users can waste less time on locating available seats and instead spend that time more wisely.</p>
             <br></br>
              <Image  style={{width: 500, height: 400}} src={pi}/>
              <Image  style={{width: 500, height: 400}} src={group}/>
            <br></br>
            <br></br>
            <br></br>
           </div>
           )
  	}
}