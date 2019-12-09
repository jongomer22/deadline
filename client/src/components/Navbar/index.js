import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import API from '../../utils/API';
import './style.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            profileLink: ""
        }

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    componentDidMount() {
        API.getUsr().then((res) => {
            if (res.data.user) {
                const user = res.data.user;
                this.setState({ user: user });
                const profileLink = "/profile/" + user.userName;
                this.setState({
                    user: user,
                    profileLink: profileLink
                });
            }
        })

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleLogOut = (event) => {

        API.logOut().then((res) => {

            sessionStorage.clear();
            window.location.replace("/");
        });
    }
    render() {
        const isLoggedIn = this.state.user;
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Deadline</NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {isLoggedIn ? (
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/AboutUs">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={this.state.profileLink}>Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="logOutButton" onClick={this.handleLogOut}>Log Out</NavLink>
                                </NavItem>
                            </Nav>
                        ) : (
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                    <NavLink href="/AboutUs">About Us</NavLink>
                                </NavItem>
                                    <NavItem>
                                        <NavLink href="/signup">Signup</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/login">Log In</NavLink>
                                    </NavItem>
                                </Nav>
                            )}
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}