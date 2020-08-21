import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      id: '',
      password: '',
      password2: '',
      school: '',
      interest: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
   
  }

  handleChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({ [key]: value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let { password, password2 } = this.state;

    if(password !== password2) {
      this.setState({
        password: '',
        password2: ''
      })
      return alert('Passwords do not match')
    }

  }

  render() {
    let { id, password, password2, school, interest, name } = this.state;
    return (
      <div className="Signup">
        <header className="Signup-header">
          <h1 className="Signup-title">Simple Sign Up</h1>
        </header>
        <div onSubmit={this.handleSubmit} className="form">
          <form action="">
            <input type="id" name="id" placeholder="id" required value={id} data-statekey='id' onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="Password" required value={password} data-statekey='password' onChange={this.handleChange}/>
            <input type="password" name="password2" placeholder="Confirm Password" required value={password2} data-statekey='password2'onChange={this.handleChange}/>
            <input type="school" name="school" placeholder="school" required value={school} data-statekey='school' onChange={this.handleChange}/>
            <input type="interest" name="interest" placeholder="interest" required value={interest} data-statekey='interest' onChange={this.handleChange}/>
            <input type="name" name="name" placeholder="name" required value={name} data-statekey='name' onChange={this.handleChange}/>
            <input type="submit" value="Submit" id="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
