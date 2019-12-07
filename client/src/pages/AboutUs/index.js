import React, { Component } from "react";
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import Adam from '../../components/DevCards/Adam';
import Lucious from '../../components/DevCards/Lucious';
import Meena from '../../components/DevCards/Meena';
import Patrick from '../../components/DevCards/Patrick';
import Zac from '../../components/DevCards/Zac';
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
                    <h3>The Dev Team</h3>
                </Jumbotron>
                <Container className="container">
                <Row>
                    <Col md={4}>
                        <Adam />
                
                        
                    </Col>
                    <Col md={4}>
                        <Lucious />

                        
                    </Col>
                    <Col md={4}>
                        <Meena />

                        
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={1}/>
                    <Col md={4}>
                        <Patrick />

                        
                    </Col>
                    <Col md={1}/>
                    <Col md={4}>
                        <Zac />

                        
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default AboutUs
