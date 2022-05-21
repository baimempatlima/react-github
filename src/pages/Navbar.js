import React from "react";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="/#">
              <i className="fab fa-github"></i> Github 
            </a>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
