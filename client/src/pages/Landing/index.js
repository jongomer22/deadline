import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import { Jumbotron, Container } from 'reactstrap';
import './landing.scss';
import Footer from '../../components/Footer';


class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron className="landingJumbo">
                    <Container className="text-center profileCont">
                        <h1 className="display-3 profileHeader">Deadline</h1>
                        <a href="/signup" className="btn btn-outline-light m-3 profileBtn">Start Now</a>
                    </Container>
                </Jumbotron>
                <Footer />
            </>
        )
    }
}
export default Landing;
