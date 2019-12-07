import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Registration';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import CreateProject from './pages/CreateProject';
import Project from './pages/Project';
import API from './utils/API';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null,
      test: false

    };

  }




  componentWillMount() {

  }

  isAuthenticated() {

    API.getUsr().then((res) => {
      console.log(res.data.user)
      console.log("works")
      if (res.data.user) {
        console.log("true")
        this.setState({ loggedIn: true })
        console.log(this.state.loggedIn);

      }
    })
  }



  render() {


    const PrivateRoute = ({ component: Component, wasRedirected, page, ...rest }) => (
      <Route {...rest} render={(props) => (
        sessionStorage.getItem("signedIn")
          ? <Component {...props} />
          : <Redirect to="/Login" wasRedirected={wasRedirected} page={page} />
      )
      } />
    );

    const AlreadyLoggedInRoute = ({ component: Component, wasRedirected, page, ...rest }) => (
      <Route {...rest} render={(props) => (
        !sessionStorage.getItem("signedIn")
          ? <Component {...props} />
          : <Redirect to="/profile" wasRedirected={wasRedirected} page={page} />
      )
      } />
    );


    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path='/profile/:usrname' component={Profile} />
          <AlreadyLoggedInRoute path='/login' component={Login} />
          <AlreadyLoggedInRoute path='/signup' component={Signup} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
          <PrivateRoute path='/dashboard/:id' component={Dashboard}
            wasRedirected={true}
            page="Profile"
          />
          <PrivateRoute path='/project/:id' component={Project}
            wasRedirected={true}
            page="Profile"
          />
          <Route exact path='/AboutUs' component={AboutUs} />
          <PrivateRoute path='/createProject' component={CreateProject}
            wasRedirected={true}
            page="Profile"
          />
        </div>
      </Router>
    );
  }
}

export default App;