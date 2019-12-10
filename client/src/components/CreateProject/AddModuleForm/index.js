import React, { Component } from "react";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";
import API from "../../../utils/API";
import "../../styles/createprojectform.scss";
import "../../styles/variables.scss";

// const addModule = (props) => {
class AddModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    };
  }
  componentDidMount() {
    API.getProfileUsers().then(res => {
      console.log(res);
      let devs = [];
      res.data.forEach(dev => {
        devs.push(dev.dev_name);
      });
      this.setState({
        developers: devs
      });
    });
  }
  render() {
    return (
      <>
        <Container className="form-holder">
          <Form>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="projName">Task Name: </Label>
                  <Input
                    type="text"
                    id="modName"
                    name="modName"
                    value={this.props.data.modName}
                    placeholder="Task Name"
                    onChange={this.props.handleInputChange}
                    disabled={
                      this.props.data.projCreated === "no" ? true : false
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="modDueDate">Task Due Date: </Label>
                  <Input
                    type="date"
                    name="modDueDate"
                    id="modDueDate"
                    value={this.props.data.modDueDate}
                    onChange={this.props.handleInputChange}
                    disabled={
                      this.props.data.projCreated === "no" ? true : false
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="projDesc">Task Description:</Label>
                  <Input
                    type="textarea"
                    name="modDesc"
                    id="modDesc"
                    value={this.props.data.modDesc}
                    onChange={this.props.handleInputChange}
                    disabled={
                      this.props.data.projCreated === "no" ? true : false
                    }
                  />
                </FormGroup>
                <Button
                  color="primary"
                  onClick={this.props.handleAddModule}
                  disabled={this.props.data.projCreated === "no" ? true : false}
                >
                  Add Task
                </Button>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="assignDev">Assign To:</Label>
                  <Input
                    type="select"
                    name="modDev"
                    id="assignDev"
                    value={this.props.data.modDev}
                    onChange={this.props.handleInputChange}
                    disabled={
                      this.props.data.projCreated === "no" ? true : false
                    }
                  >
                    <option>-- select developer --</option>
                    {this.state.developers.map((e, key) => {
                      if (e) {
                        return (
                          <option key={key} value={e}>
                            {e}
                          </option>
                        );
                      }
                    })}
                  </Input>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      defaultChecked={this.props.data.level1}
                      onChange={this.props.handleCheckBox}
                      disabled={
                        this.props.data.projCreated === "no" ? true : false
                      }
                    />{" "}
                    Level 1 Task
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    name="modParent"
                    id="modParent"
                    disabled={this.props.data.level1 === true ? true : false}
                    value={this.props.data.modParent}
                    onChange={this.props.handleInputChange}
                  >
                    <option>-- select parent --</option>
                    {this.props.data.modules.map((e, key) => {
                      if (e.level1module) {
                        return (
                          <option key={key} value={e.mod_name}>
                            {e.mod_name}
                          </option>
                        );
                      }
                    })}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}

export default AddModule;
