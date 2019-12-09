import React from 'react';
import { Col, Row, Button, FormGroup, FormFeedback, Label, Input, InputGroup, InputGroupAddon, Jumbotron, Container } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import '../styles/newuserform.scss';
import '../styles/variables.scss';



export default class RegForm extends React.Component {
  render() {
    return (
      <div className="page-body">
        <Jumbotron className="form-holder">
          <Container fluid>
            <AvForm>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="First Name">First Name</Label>
                    <Input type="text" name="firstName" onChange={this.props.handleInputChange} placeholder="First Name" value={this.props.details.firstName} />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="Last Name">Last Name</Label>
                    <Input type="text" name="lastName" onChange={this.props.handleInputChange} placeholder="Last Name" value={this.props.details.lastName} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <InputGroup>
                    {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
                    <Input placeholder="Username" name="userName" onChange={this.props.handleInputChange} value={this.props.details.userName} />
                    <FormFeedback>That name is already taken</FormFeedback>
                  </InputGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>

                    <AvField name="email" label="Email Address" placeholder="Email Address" onChange={this.props.handleInputChange} value={this.props.details.email} type="email" required />

                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>

                    <AvField type="password" name="password" onChange={this.props.handleInputChange} placeholder="*******" value={this.props.details.password} required />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address1" id="exampleAddress" onChange={this.props.handleInputChange} placeholder="1234 Main St" value={this.props.details.address1} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" onChange={this.props.handleInputChange} placeholder="Apartment, studio, or floor" value={this.props.details.address2} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" onChange={this.props.handleInputChange} placeholder="City" value={this.props.details.city} />
                  </FormGroup>
                </Col>
                <Col md={1}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="select" name="stateProvince" id="exampleState" onChange={this.props.handleInputChange} value={this.props.details.stateProvince}>
                      <option>Select</option>
                      <option>Alaska - AK</option>
                      <option>Arizona - AZ</option>
                      <option>Arkansas - AR</option>
                      <option>California - CA</option>
                      <option>Colorado - CO</option>
                      <option>Connecticut - CT</option>
                      <option>Delaware - DE</option>
                      <option>Florida - FL</option>
                      <option>Georgia - GA</option>
                      <option>Hawaii - HI</option>
                      <option>Idaho - ID</option>
                      <option>Illinois - IL</option>
                      <option>Indiana - IN</option>
                      <option>Iowa - IA</option>
                      <option>Kansas - KS</option>
                      <option>Kentucky - KY</option>
                      <option>Louisiana - LA</option>
                      <option>Maine - ME</option>
                      <option>Maryland - MD</option>
                      <option>Massachusetts - MA</option>
                      <option>Michigan - MI</option>
                      <option>Minnesota - MN</option>
                      <option>Mississippi - MS</option>
                      <option>Missouri - MO</option>
                      <option>Montana - MT</option>
                      <option>Nebraska - NE</option>
                      <option>Nevada - NV</option>
                      <option>New Hampshire - NH</option>
                      <option>New Jersey - NJ</option>
                      <option>New Mexico - NM</option>
                      <option>New York - NY</option>
                      <option>North Carolina - NC</option>
                      <option>North Dakota - ND</option>
                      <option>Ohio - OH</option>
                      <option>Oklahoma - OK</option>
                      <option>Oregon - OR</option>
                      <option>Pennsylvania - PA</option>
                      <option>Rhode Island - RI</option>
                      <option>South Carolina - SC</option>
                      <option>South Dakota - SD</option>
                      <option>Tennessee - TN</option>
                      <option>Texas - TX</option>
                      <option>Utah - UT</option>
                      <option>Vermont - VT</option>
                      <option>Virginia - VA</option>
                      <option>Washington - WA</option>
                      <option>West Virginia - WV</option>
                      <option>Wisconsin - WI</option>
                      <option>Wyoming - WY</option>
                      <option>American Samoa - AS</option>
                      <option>District of Columbia - DC</option>
                      <option>Federated States of Micronesia - FM</option>
                      <option>Guam - GU</option>
                      <option>Marshall Islands - MH</option>
                      <option>Northern Mariana Islands - MP</option>
                      <option>Palau - PW</option>
                      <option>Puerto Rico - PR</option>
                      <option>Virgin Islands - VI</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={1}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" onChange={this.props.handleInputChange} placeholder="5-digit Zip" value={this.props.details.zip} />
                  </FormGroup>
                </Col>
              </Row>
              <Button onClick={this.props.user}>Register</Button>
            </AvForm>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}