import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function invalidAlert(props) {
    return (
        <UncontrolledAlert color="danger">
            Invalid data!
    </UncontrolledAlert>
    );
}

export default invalidAlert;