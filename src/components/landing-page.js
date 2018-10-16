import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

import './landing-page.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  // <div className="nav">
  //   <a className="btn" href="#login">
  //     <span>About</span>
  //   </a>
  // </div>;

  return (
    <div className="home">
      <div className="bg">
        <div className="bg-img" />
        <div className="fade" />
        <div className="about typewriter">
          <h1>Welcome to Amgi!</h1>
        </div>
        <a href="#login">Login</a>
      </div>
      <div id="login" className="welcome">
        <div className="welcome-header">
          <h2>Let's log in!</h2>
          <LoginForm />
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
