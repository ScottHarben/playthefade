import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-dark fixed-top"
      style={{ backgroundColor: "#232F34" }}
    >
      <a className="navbar-brand" href="https://playthefade.com">
        <img
          src={require("../content/images/logo.png")}
          width="90"
          alt=""
          loading="lazy"
        />
      </a>
    </nav>
  );
}

export default Navbar;
