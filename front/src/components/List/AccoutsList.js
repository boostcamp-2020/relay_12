import React, { Component } from "react";
import "./AccoutsList.css";
import imgUser from "./user.JPG";
import Button from "../Buttons/Button";

class AccountsList extends Component {
  getAccountList() {
    let { data } = this.props;
    let accounts = [];
    if (data !== undefined) {
      accounts = data.reduce((acc, account, idx) => {
        console.log(acc);
        return acc.concat([
          <li className="account-list-item">
            <img id="user-img" src={imgUser} alt="" />
            <div className="account-item-area">
              <span id="fname">{account.fname}</span>
              <span id="similarity">유사도 :{account.similarity}%</span>
              <Button className="btn-add">친구등록</Button>
            </div>
          </li>,
        ]);
      }, accounts);
    }

    return accounts;
  }

  render() {
    let accounts = this.getAccountList();
    return <ul className="account-list-container">{accounts}</ul>;
  }
}

export default AccountsList;
