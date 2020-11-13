import React from "react";

function Navbar() {
  return (
    <div className="container-fluid" id="NavColor">
      <div style={{ width: "100%", height: "56px" }}>
        <div className="row h-100">
          <div className="col-md-10 offset-md-1 h-100">
            <div style={{ position: "absolute", left: "15", bottom: "0" }}>
              <h5>
                Play The Fade{" "}
                <small className="text-muted" style={{ marginLeft: "5px" }}>
                  Fantasy golf lineup optimizer
                </small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
