import style from "./Home.module.css"
import React ,{ useState } from 'react'
import { Link } from "react-router-dom"
import CreateUser from "./CreateUser"
import WelcomePage from "./WelcomePage"
import User from "./User"
import  { Component, createRef } from 'react';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.navbarRef = createRef();
  }
  handleClick = () => {
    this.setState({ clicked:!this.state.clicked });
    this.navbarRef.current.classList.toggle(style.active);
  }

  closeMenu = () => {
    this.setState({ clicked: false });
    this.navbarRef.current.classList.remove(style.active);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  }

  

  render() {
    return (
      <nav id={style.Nav}>
        <a href="/" id={style.name}>Free storage</a>
        <div>
          <ul ref={this.navbarRef} id={style.navbar}>
            <li><Link to="/" onClick={this.closeMenu}>Home</Link></li>
            <li><Link className={style.active} to="/createuser"onClick={this.closeMenu}>Create-User</Link></li>
            <li><Link to="/user" onClick={this.closeMenu}>User</Link></li>
            <li><Link to="/aboutus" onClick={this.closeMenu}>About Us</Link></li>
            <li><Link to="/getstarted" onClick={this.closeMenu}>Get Started</Link></li>
          </ul>
        </div>

        <div id={style.mobile}>
          <i id={style.bar} 
             className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'} 
             onClick={this.handleClick} />
        </div>
      </nav>
    );
  }
}
export default Home

