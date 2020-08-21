import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import imgA from "./logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>
          <img src={imgA} width="400" alt="I LOVE SCHOOL" />
        </h1>
      </Link>
    </header>
  );
}

export default Header;
