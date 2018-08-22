import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Help from "../Help/Help";
import MyProfile from "../MyProfile/MyProfile";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Courses from "../Courses/Courses";
import Nav from "../../components/Nav/Nav";
import Organisations from "../Admin/Organisations/Organisations";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          <Nav />

          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Title</h1>
              </div>
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/help" component={Help} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/courses" component={Courses} />
            <Route path="/admin/organisations" component={Organisations} />                        
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
