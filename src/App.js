import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "fontsource-roboto";
import Navbar from "./components/navbar";
import Roster from "./components/roster";
import DashboardBody from "./components/dashboardBody";
import MobileBody from "./mobileComponents/mobileBody";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div id="Parent">
          <div className="container-fluid Content">
            <div id="MobileBody">
              <MobileBody />
            </div>
            <div id="DashboardBody" className="h-100">
              <div className="row h-100">
                <div className="col-md-10 offset-md-1 h-100">
                  <DashboardBody />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
