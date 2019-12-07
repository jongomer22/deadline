import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Pie from '../../components/Dashboard/Pie';
import Tree from '../../components/Dashboard/Tree';
import Projphase from '../../components/Dashboard/Stepprogress';
import Projsummary from '../../components/Dashboard/Projsummary';
import Moduleprogress from '../../components/Dashboard/Moduleprogress';

class Dashboard extends Component {

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row className="mt-3">
                        <Col md="3">
                            <Projsummary projId={this.props.match.params.id} />
                        </Col>
                        <Col className="text-center">
                            <Projphase projId={this.props.match.params.id} />
                        </Col>
                        <Col md="3" className="text-center">
                            <Pie
                                projId={this.props.match.params.id}
                                width={140}
                                height={140}
                                innerRadius={35}
                                outerRadius={70}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="text-center">
                            <Tree projId={this.props.match.params.id} />
                        </Col>
                        <Col className="text-center">
                            <Moduleprogress projId={this.props.match.params.id} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;