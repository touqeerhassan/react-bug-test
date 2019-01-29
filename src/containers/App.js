import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// bug: Login form was not imported
import LoginForm from '../components/LoginForm';
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  state = {
    showLoginForm: true,
    showCheckmark: false
  };

  handleLogin = () => {
    this.setState({
      showLoginForm: false,
      showCheckmark: true
    });
  }

  handleLogout = () => {
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    // Used destructing because this.state was used in multiple places
    const { showLoginForm, showCheckmark } = this.state;
    return (
      <div className='app'>
      {/* Passing showLogoutButton from here because child needs to know when to show logout button */}
        <Navbar ref='navbutton' showLogoutButton={!showLoginForm} handleLogout={this.handleLogout} />
        {/* No need to have condition like `variable === true` if its boolean */}
        <div className={showLoginForm ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={showCheckmark ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
