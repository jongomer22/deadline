import React from 'react';

import { Form, FormGroup, Label, Input, Container } from 'reactstrap';


const updateProfile = (props) => {
    return (
        <>
            <Container className="form-holder">
                <Form className="pb-2">
                    <FormGroup>
                        <Label for="projName">Job Title: </Label>
                        <Input type="text" id="jobtitle" name="role" value={props.data.role} placeholder="Job Title"
                            onChange={props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="modDueDate">Contact Number: </Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={props.data.phoneNumber}
                            onChange={props.handleInputChange}
                            placeholder="(000)000-0000"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="projDesc">LinkedIn Profile:</Label>
                        <Input type="text" name="linkedin" id="linkedin" value={props.data.linkedin}
                            onChange={props.handleInputChange} placeholder="(linkedIn url)" />
                    </FormGroup>
                </Form>
            </Container>
        </>
    );
}

export default updateProfile;