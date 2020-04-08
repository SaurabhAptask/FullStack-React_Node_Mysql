import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import axios from 'axios';
import './CSS/PopupAddNew.css';

class PopupAddNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      User: []
    }
    //this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);          
    this.onSubmit = this.onSubmit.bind(this);       
  }

  handleNameChange(e) {
    this.setState({User_name: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({User_email: e.target.value})
  }
  
  componentDidMount() {
    axios.get('http://localhost:8080/add')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }  
 
  onSubmit(e) {
    e.preventDefault();
      const employee = {
      User_name: this.state.name,        
      User_email: this.state.email        
    }
    axios.post('http://localhost:8080/add', employee)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })            
  }

  render() {
    return (      
      <div className='popupAddNew'>                
        <div className='popupAddNew_inner'>
          <img src="./assets/ico_close.png" onClick={this.props.closePopupAddNew} className="close" />
          <div className="container">         
            <header>
              <h1> Add User </h1>
            </header>
            <form onSubmit={this.onSubmit} method="user" >
              <input type="text"  name="User_name" placeholder="   Name" className="box" onChange={this.handleNameChange}/>             
              <input type="text"  name="User_email" placeholder ="   Email" className="box" onChange={this.handleEmailChange}/ >
              <div className="radiobutton">
                <span>
                  <label className="containerone">
                    <input type="radio" name="radio" />Admin
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerone secondbutton">
                    <input type="radio" name="radio" />Costemer Executive
                    <span className="checkmark"></span>
                  </label>
                </span>
              </div>
              <input type="text"  name="lname" placeholder="  Mobile Number(Optional)" className="box"/ >
              <button className="abutton" type="submit" value="submit"><span className="textt" >ADD USER</span></button>      
            </form> 
          </div>
        </div>
      </div>  
    );
  }
}

export default PopupAddNew;