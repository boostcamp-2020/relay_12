import React, { Component } from "react";
import "./Accounts.css";
import Button from "../components/Buttons/Button";

class Accounts extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>로고</h3>
        </div>
        <ul>
          <li>
            <span>친구명</span>
            <span>유사도 : </span>
            <span>80.00%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accounts;
