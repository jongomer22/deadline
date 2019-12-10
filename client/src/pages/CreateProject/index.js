import React, { Component } from 'react';
import {
    Container, Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Navbar from '../../components/Navbar';
import ProjectForm from '../../components/CreateProject/CreateProjectForm';
import AddModule from '../../components/CreateProject/AddModuleForm';
import ModuleCard from '../../components/CreateProject/ModuleCard';
import ProjectCard from '../../components/CreateProject/ProjectCard';
import API from '../../utils/API';


class Project extends Component {
    state = {
        projName: "",
        projOwner: "",
        startDate: "",
        dueDate: "",
        projDesc: "",
        modName: "",
        modDesc: "",
        modDev: "",
        modDueDate: "",
        modParent: "",
        level1: true,
        developersInvolved: [],

        projCreated: "no",
        projId: "",
        modules: [],
        navigateTo: ""
    };

    componentDidMount() {

        API.getUsr().then(res => {
            if (res.data.user) {
                this.setState({ projOwner: res.data.user.userName })
            }

        });
    }

    handleCheckBox = () => {
        this.setState({ level1: !this.state.level1 });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    handleSubmit = () => {
        let data = { developers: this.state.developersInvolved };
        API.updateProject(this.state.projId, data)
            .then(res => {
                console.log(res);
                window.location.replace(this.state.navigateTo);
            })
            .catch(err => console.log(err));
    }

    createProject = () => {
        if (this.state.projId === "") {
            console.log("Calling createProject");
            API.addProject({
                proj_name: this.state.projName,
                proj_owner: this.state.projOwner,
                proj_description: this.state.projDesc,
                start_date: this.state.startDate,
                due_date: this.state.dueDate
            })
                .then(res => {
                    console.log(res);
                    let devsInvolved = this.state.developersInvolved;
                    devsInvolved.push(this.state.projOwner);
                    this.setState({
                        projCreated: "yes",
                        projId: res.data._id,
                        navigateTo: "/project/" + res.data._id,
                        developersInvolved: devsInvolved
                    });
                    console.log(this.state);
                    let data = {
                        proj_name: this.state.projName,
                        proj_id: this.state.projId
                    };
                    console.log("new proj data");
                    console.log(data);
                    API.updateNewProj(this.state.projOwner, data)
                        .then(function (res) {
                            console.log("new proj");
                            console.log(res);
                        });
                })
                .catch(err => console.log(err));
        } else {
            console.log("Calling updateProject");
            API.updateProject(this.state.projId, {
                proj_name: this.state.projName,
                proj_owner: "filler",
                proj_description: this.state.projDesc,
                start_date: this.state.startDate,
                due_date: this.state.dueDate
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        projCreated: "yes",
                        projId: res.data._id
                    })
                    console.log(this.state);
                })
                .catch(err => console.log(err));
        }
    }

    editProject = () => {
        console.log("Updating Project");
        this.setState({
            projCreated: "no"
        })
    }

    addModule = () => {
        API.addModule(this.state.projId, {
            mod_name: this.state.modName,
            mod_description: this.state.modDesc,
            developer: this.state.modDev,
            mod_due: this.state.modDueDate,
            parent: this.state.modParent,
            level1module: this.state.level1
        })
            .then(res => {
                console.log(res);
                let devsInvolved = this.state.developersInvolved;
                if (devsInvolved.indexOf(this.state.modDev) === -1) {
                    devsInvolved.push(this.state.modDev);
                    let data = {
                        proj_name: this.state.projName,
                        proj_id: this.state.projId
                    };
                    console.log("new proj data");
                    console.log(data);
                    API.updateNewProj(this.state.modDev, data)
                        .then(function (res) {
                            console.log("new proj");
                            console.log(res);
                        })
                        .catch(err => console.log(err));
                }
                this.setState({
                    modules: res.data.modules,
                    modName: "",
                    modDesc: "",
                    modDev: "",
                    modDueDate: "",
                    modParent: "",
                    level1: true,
                    developersInvolved: devsInvolved
                });
                console.log(this.state);

            })
            .catch(err => console.log(err));
    }

    delModule = (modId) => {
        API.deleteModule(this.state.projId, modId)
            .then(res => {
                console.log(res);
                // To update this.state.modules
                API.getProject(this.state.projId)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            modules: res.data.modules
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    markComplete = (modId) => {
        API.updateModule(this.state.projId, modId, {
            complete: true
        })
            .then(res => {
                console.log(res);
                // To update this.state.modules
                API.getProject(this.state.projId)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            modules: res.data.modules
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="page-body">
                <Navbar />
                <Container>
                    {this.state.projCreated === "no" ?
                        (<Card className="my-3 card-props">
                            <CardBody>
                                <CardTitle><h5>Create New Project</h5><hr /></CardTitle>
                                <CardSubtitle><h6>Project owner: <i>{this.state.projOwner.toUpperCase()}</i></h6></CardSubtitle>
                                <ProjectForm data={this.state} handleInputChange={this.handleInputChange} createProject={this.createProject} />
                            </CardBody>
                        </Card>) :
                        (<ProjectCard data={this.state} editProject={this.editProject} />)
                    }
                    <Card className="my-3 card-props">
                        <CardBody>
                            <CardTitle><h5>Add Task</h5><hr /></CardTitle>
                            <AddModule data={this.state} handleInputChange={this.handleInputChange}
                                handleCheckBox={this.handleCheckBox} handleAddModule={this.addModule} />
                        </CardBody>
                    </Card>
                    <div className="modules">
                        {this.state.modules.map(module => (
                            <ModuleCard key={module._id} data={module} delModule={this.delModule} markComplete={this.markComplete} />
                        ))}
                    </div>
                    <Button color="success" size="lg" block onClick={this.handleSubmit}>Done</Button>
                </Container>
            </div>
        )
    }
};

export default Project;