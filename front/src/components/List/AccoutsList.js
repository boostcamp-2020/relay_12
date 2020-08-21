import React, { Component } from "react";
import "./AccoutsList.css";
import imgUser from "./user.JPG";
import Button from "../Buttons/Button";

class AccountsList extends Component {
  onBtnClickListener() {
    if (window.confirm("정말 추가하시겠습니까??") == true) {
      alert("친구가 추가되었습니다 :-)");
    }
  }

  getAccountList() {
    let { data } = this.props;
    let accounts = [];
    if (data !== undefined) {
      accounts = data.reduce((acc, account, idx) => {
        console.log(acc);
        return acc.concat([
          <li className="account-list-item">
            <img className="user-img" src={imgUser} alt="" />
            <div className="account-item-area">
              <span className="fname">{account.fname}</span>
              <span className="similarity">유사도 :{account.similarity}%</span>
              <Button
                className="btn-add"
                onClick={this.onBtnClickListener.bind(this)}
              >
                친구등록
              </Button>
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
