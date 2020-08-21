import React, { Component } from "react";
import "./Accounts.css";
import AccountsList from "../components/List/AccoutsList";

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          fname: "친구1",
          similarity: 80.0,
        },
        {
          fname: "친구2",
          similarity: 73.1,
        },
        {
          fname: "친구3",
          similarity: 82.0,
        },
      ],
    };
  }

  componentDidMount() {
    // this.requestGetApi();
  }

  requestGetApi(url) {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        alert(json);
      })
      .catch((err) => {
        new Error("API Error");
      });
  }

  render() {
    return (
      <div>
        <div>
          <h3>로고</h3>
        </div>
        <AccountsList data={this.state.accounts}></AccountsList>
      </div>
    );
  }
}

export default Accounts;
