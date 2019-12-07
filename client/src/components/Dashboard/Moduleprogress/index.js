import React, { createRef, Component } from "react";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Moment from 'moment';
import Progressbar from "../Progressbar";
import API from '../../../utils/API';
import '../../styles/dashboard/moduleprogress.scss';

class ProjPhase extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        this.state = {
            dataRecords: []
        }
    }
    componentWillMount() {
        let localDataRecords = [];
        API.getProject(this.props.projId)
            .then(res => {
                if (res.data.modules) {
                    res.data.modules.forEach(i => {
                        if (i.level1module) {
                            let tmp = {
                                id: i._id,
                                name: i.mod_name,
                                owner: i.developer,
                                due: i.mod_due,
                                subcount: 0,
                                subcomplete: 0
                            };
                            res.data.modules.forEach(j => {
                                if (i.mod_name === j.parent) {
                                    tmp.subcount++;
                                    if (j.complete) {
                                        tmp.subcomplete++;
                                    }
                                }
                            });
                            if (tmp.subcount === 0) {
                                if (i.complete) {
                                    tmp.subcount = 1;
                                    tmp.subcomplete = 1;
                                } else {
                                    tmp.subcount = 1;
                                    tmp.subcomplete = 0;
                                }
                            }
                            localDataRecords.push(tmp)
                        }
                    });
                }
                this.setState({
                    dataRecords: localDataRecords
                })
                console.log(this.state.dataRecords);
            })
            .catch(err => console.log(err));
    }

    renderTableData() {
        return this.state.dataRecords.map((data, index) => {
            const { id, name, owner, due, subcount, subcomplete } = data
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{owner}</td>
                    <td>{Moment(due).format('YYYY-MM-DD')}</td>
                    <td>{<Progressbar count={subcount} complete={subcomplete} />}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Card className="m-1 card-props">
                <CardBody>
                    <CardTitle><h5>Module Progress</h5><hr /></CardTitle>
                    <table id='module_progress' className="m-1">
                        <tbody>
                            <tr>
                                <th>Module Name</th>
                                <th>Module Owner</th>
                                <th>Due Date</th>
                                <th>Progress</th>
                            </tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            // <div>
            //     <h5>Table</h5>
            //     <table id='module_progress' className="m-1">
            //         <tbody>
            //             <tr>
            //                 <th>Module Name</th>
            //                 <th>Module Owner</th>
            //                 <th>Due Date</th>
            //                 <th>Progress</th>
            //             </tr>
            //             {this.renderTableData()}
            //         </tbody>
            //     </table>
            // </div>
        );
    }
}

export default ProjPhase;
