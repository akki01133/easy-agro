import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems'
import {auth} from '../../firebase'
import { Link } from 'react-router-dom';
class NavBar extends Component {
  state = {
    clicked: false
  }

  clickHandle=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
        <nav>
            <div id="hamburger" onClick={this.clickHandle}>
                <i id="hamburger-icon" className={this.state.clicked?'fas fa-times' : 'fas fa-bars'}> </i>
            </div>
            <h2 className="logo">
                <span className='kali-blue'>$</span>Ajeet_.kt</h2>

            <ul className = {this.state.clicked ? 'menu-options menu-visible':'menu-options menu-hidden'}>
                {MenuItems.map((item,index)=>{
                  return(
                    <Link key={index} to={item.url} className={item.cName} >
                    <li  onClick={this.clickHandle}>
                      {item.title}
                    </li>
                    </Link>
                  )
                })}
                {this.props.status?
                <Link to="/">
                <li className="nav-links" onClick={()=>auth.signOut()}>Sign Out</li>
                </Link>:
                <Link to="SignIn">
                    <li className="active nav-links" onClick={this.clickHandle} >Sign In</li>
                </Link>
                }
            </ul>
        </nav>
    )
  }
}

export default NavBar;


