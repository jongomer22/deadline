import React, { Component } from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Moment from 'moment';
import API from '../../../utils/API';

class Projsummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            proj_name: "",
            proj_owner: "",
            start_date: "",
            due_date: "",
            overallPercentage: ""
        }
    }

    componentDidMount() {
        let overallPercentage = 0;
        API.getProject(this.props.projId)
            .then(res => {
                let moduleCount = 0, moduleComplete = 0;
                if (res.data.modules) {
                    res.data.modules.forEach(i => {
                        if (i.level1module) {
                            moduleCount++;
                            let subcount = 0, subcomplete = 0;
                            res.data.modules.forEach(j => {
                                if (i.mod_name === j.parent) {
                                    subcount++;
                                    if (j.complete) {
                                        subcomplete++;
                                    }
                                }
                            });
                            if (subcount === 0) {
                                if (i.complete) {
                                    moduleComplete++;
                                }
                            } else if (subcount === subcomplete) {
                                moduleComplete++;
                            }
                        }
                    });
                    overallPercentage = ((moduleComplete / moduleCount) * 100).toFixed(1);
                }
                this.setState({
                    proj_name: res.data.proj_name.toUpperCase(),
                    proj_owner: res.data.proj_owner.toUpperCase(),
                    start_date: res.data.start_date,
                    due_date: res.data.due_date,
                    overallPercentage: overallPercentage
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Card className="m-1 card-props">
                <CardBody>
                    <CardTitle><h4>{this.state.proj_name}</h4><hr /></CardTitle>
                    <CardSubtitle><h6><i>{this.state.proj_owner}</i></h6></CardSubtitle>
                    <p><b>Start Date: </b>{Moment(this.state.start_date).format('YYYY-MM-DD')}</p>
                    <p><b>End Date: </b>{Moment(this.state.due_date).format('YYYY-MM-DD')}</p>
                    <p><b>Progress: </b>{this.state.overallPercentage}%</p>
                </CardBody>
            </Card>
        );
    }
}

export default Projsummary;
