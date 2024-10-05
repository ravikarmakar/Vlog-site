import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>JustCode Vlog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Cretae Vlog</Link>
      </div>
    </div>
  );
}

export default Navbar;
