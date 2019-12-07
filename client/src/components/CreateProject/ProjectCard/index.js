import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import Moment from 'moment';

const addModule = (props) => {
    let devs = "";
    if (props.data.developers) {
        props.data.developers.forEach(dev => {
            devs += dev + ", ";
        });
    }

    return (
        <Card className="m-1 card-props">
            <CardBody>
                <CardTitle><h5>{props.data.projName}</h5><hr /></CardTitle>
                <CardSubtitle><h6>Owner: {props.data.projOwner}</h6></CardSubtitle>
                <Row>
                    <Col>
                        <p><b>Description: </b>{props.data.projDesc}</p>
                    </Col>
                    <Col>
                        <p>Developers: {devs}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Start Date: {Moment(props.data.startDate).format('YYYY-MM-DD')}</p>
                    </Col>
                    <Col>
                        <p>Due Date: {Moment(props.data.dueDate).format('YYYY-MM-DD')}</p>
                    </Col>
                </Row>
                <Row>
                    <Button color="primary" className="mx-3" onClick={props.editProject}>Edit</Button>
                </Row>
            </CardBody>
        </Card>
    );
}

export default addModule;
