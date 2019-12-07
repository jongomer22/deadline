import React from "react";
import {
    Card, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';
import Moment from 'moment';

const addModule = (props) => {
    return (

        <Card className="m-1 card-props">
            {console.log("module card")}
            {console.log(props.data)}
            {console.log("name: " + props.data.mod_name)}
            {console.log("id: " + props.data._id)}
            <CardBody>
                <CardTitle><h5>Module Name: {props.data.mod_name}</h5><hr /></CardTitle>
                <Row>
                    <Col>
                        <p>Assigned to: {props.data.developer}</p>
                    </Col>
                    <Col>
                        <p>Due Date: {Moment(props.data.mod_due).format('YYYY-MM-DD')}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Description: {props.data.mod_description}</p>
                    </Col>
                    {(props.data.parent !== "") ? (
                        <Col>
                            <p>
                                Parent Module: {props.data.parent}
                            </p>
                        </Col>
                    ) : (
                            <></>
                        )}
                </Row>

                <Button color="danger" id={props.data._id} onClick={() => props.delModule(props.data._id)}>Delete</Button>
                {props.data.complete ? (<></>) :
                    <Button color="primary" className="ml-3" id={props.data._id} onClick={() => props.markComplete(props.data._id)}>Mark Complete</Button>
                }
            </CardBody>
        </Card>
    );
}

export default addModule;
