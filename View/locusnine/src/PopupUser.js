import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import PopupAddNew from './PopupAddNew.js';
import './CSS/Style.css'; 

class PopupUser extends React.Component {
  constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        showPopupAddNew: false,
        users: []            
      }
   }

  togglePopupAddNew() {
    this.setState({
      showPopupAddNew: !this.state.showPopupAddNew
    });
  }

  componentDidMount() {
    var abc = fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className='PopupUser'>
        <img src="./assets/ico_close.png" onClick={this.props.closePopupUser} class="close" />
        <div className='PopupUser_inner'>
          <header>
            <ul className="header">
              <li><img src="./assets/ico_users.png"/></li>
              <li className="space"> Users</li>
              <li className="right">
                <button className="Addnew" onClick={this.togglePopupAddNew.bind(this)}>
                  <img src="./assets/ico_add.png" />Add New
                </button>
                  {this.state.showPopupAddNew ? 
                    <PopupAddNew  text='Close Me' closePopupAddNew={this.togglePopupAddNew.bind(this)}/>
                    : null
                  }
              </li>
              <li className="right">              
                <form className="example " action="/action_page.jsx">
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit"><img src="./assets/ico_search.png" className="a"/></button>
                </form>           
              </li>
            </ul>
          </header>
          <table id='students'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ROLE TYPE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            {this.state.users.map((todo) => (
              <tbody>                  
                <tr>
                  <td>{ todo.User_name }</td>
                    <td>{ todo.User_email}</td>
                    <td>{ todo.User_Role_type }</td>
                    <td>{ todo.User_status }</td>
                    <td><img src="./assets/ico_edit.png"/></td>
                </tr>                   
              </tbody>
            ))}
          </table>           
        </div>
      </div>
    );
  }
}

export default PopupUser;