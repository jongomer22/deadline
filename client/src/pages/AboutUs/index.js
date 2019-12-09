import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import Muey from '../../components/DevCards/Muey';
import Manny from '../../components/DevCards/Manny';
import Jeff from '../../components/DevCards/Jeff';
import Aimee from '../../components/DevCards/Aimee';
import Jeremy from '../../components/DevCards/Jeremy';
import John from '../../components/DevCards/John';
import Navbar from '../../components/Navbar';
import "../../components/styles/variables.scss";
import "../../components/styles/AboutUs/jumbotron.scss";


class AboutUs extends Component {


    render() {
        return (
            <div className="page-body">
                <Navbar />
                <br></br>
                <Jumbotron id="aboutUsJumbo">
                    <h1>The Dev Team</h1>
                </Jumbotron>
                <Container className="container">
                <Row>
                    <Col md={4}>
                        <Muey />
                
                        
                    </Col>
                    <Col md={4}>
                        <Manny />

                        
                    </Col>
                    <Col md={4}>
                        <Jeff />

                        
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={4}>
                        <Aimee />

                        
                    </Col>
                    <Col md={4}>
                        <Jeremy />
                    </Col>

                    <Col md={4}>
                        <John />

                        
                    </Col>
                
                </Row>
                </Container>
            </div>
        )
    }
}

export default AboutUs
