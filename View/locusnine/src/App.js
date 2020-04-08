import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import PopupUser from './PopupUser.js';
import './CSS/Style.css'; 
import './CSS/App.css';
import './CSS/user.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopupUser: false,
      nav: [
            {id:1,home: 'locusnine',dashboard: 'dashboard',user:'user', session: 'session manager', name:'John Sith'}
      ],
      users: []    
    };
  }

  togglePopupUser() {
    this.setState({
      showPopupUser: !this.state.showPopupUser
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
    console.log(abc)
  }

  renderNav() {
    return this.state.nav.map((nav, index) => {
      const { id, home, dashboard, user , session , name} = nav //destructuring
      return (
        <ul key={id}>
          <li>{home}</li>
          <li>{dashboard}</li>
          <li>{user}</li>
          <li>{session}</li>
          <li>{name}</li>
        </ul>
      )
    })
  }

  render() {
    return (     
      <div className='app'>
        <ul>
          <li><a href="#home"><img src="assets/Logo.png"/></a></li>
          <li ><a href="#dashboard"><img src="assets/ico_dashboard.png"/>  Dashboard</a></li>
          <li onClick={this.togglePopupUser.bind(this)}><a href="#user" class="user"><img src="assets/ico_users.png"/>  Users</a></li>
          <li><a href="#session"><img src="assets/ico_sessionmanager.png"/> Session Manager</a></li>
          <li class="right-float"><a href="#more"><img src="assets/ico_downarrow.png"/></a></li>
          <li class="right-float user"><a href="#user_name">John Smith</a></li>
          <li class="right-float"><a href="#profile"><img src="assets/ico_user.png"/></a></li>
          <li class="right-float"><a href="#notification"><img src="assets/ico_notification.png"/></a></li>
        </ul>        
        {this.state.showPopupUser ? 
          <PopupUser            
            closePopupUser={this.togglePopupUser.bind(this)}
          />
          : null
        }
      </div>
    );
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
