import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';
import './Earthquake.css'
import { Card, Container, Row, Col } from "react-bootstrap";


function Earthquake() {
    const [data, setData] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(null);
    useEffect(() => {

        fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-07-01&endtime=2023-05-01&minmagnitude=4&latitude=28.6&longitude=77.2&maxradiuskm=300`)
        .then(response => response.json())
        .then(data => setData(data.features))
        .then((data) => console.log(data))
        .catch(error => console.log(error));
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         setCurrentPosition(position);
        //         console.log(position)

        //         fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2023-05-01&minmagnitude=4&latitude=${currentPosition.coords.latitude}&longitude=${currentPosition.coords.longitude}&maxradiuskm=300`)
        //             .then(response => response.json())
        //             .then(data => setData(data.features))
        //             .then((data) => console.log(data))
        //             .catch(error => console.log(error));
        //     },
        //     (error) => {
              
        //         console.log(error);
        //     }
        // );


    }, []);

    return (
        <div className='earth-quake-box'>
            <Container className="eq">
      <h1 className="text-center my-5"> Recent Earthquake Analytics of India</h1>
      <Row>
        {data.map((quake) => (
          <Col sm={12} md={6} lg={4} key={quake.id}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>{quake.properties.place}</Card.Title>
                <Card.Text>Magnitude: {quake.properties.mag}</Card.Text>
                <Card.Text>
                  Time: {new Date(quake.properties.time).toLocaleString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     
    </Container>
    <a  href="https://sankatmochak-earthquake-monitoring.netlify.app/"className='eq-txt'>Wants to know more?</a>
            <Footer/>
        </div>
    );
}

export default Earthquake;
