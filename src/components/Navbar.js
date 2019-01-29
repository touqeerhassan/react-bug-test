// Renamed the file because it was not following convension
import React, { Component } from 'react';
// Styles are already imported in App

class Navbar extends Component {

  // constructor was not needed
  // bug: state is not needed because this component is managed by parent

  render() {
    let { showLogoutButton } = this.props;
    let sessionButton = showLogoutButton ? <button className='flat-button border-gray' onClick={() => this.props.handleLogout()}>Sign Out</button> : null;

    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;