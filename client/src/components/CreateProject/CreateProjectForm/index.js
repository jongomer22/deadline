import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../../styles/createprojectform.scss';
import '../../styles/variables.scss';


const createProj = (props) => {
    return (
        <>
            {console.log("create proj form")}
            {console.log(props)}
            <Container className="form-holder">
                <Form>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projName">Project Name: </Label>
                                <Input type="text" id="projName" name="projName" value={props.data.projName}
                                    placeholder="Project Name" onChange={props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="startDate">Start Date: </Label>
                                <Input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    value={props.data.startDate}
                                    onChange={props.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="projDesc">Project Description:</Label>
                                <Input type="textarea" name="projDesc" value={props.data.projDesc}
                                    id="projDesc" onChange={props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="dueDate">ETA: </Label>
                                <Input
                                    type="date"
                                    name="dueDate"
                                    id="dueDate"
                                    value={props.data.dueDate}
                                    onChange={props.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Button color="primary" className="m-2" onClick={props.createProject}>Create</Button>
                    </Row>
                </Form>
            </Container>
        </>
    );
}
export default createProj;