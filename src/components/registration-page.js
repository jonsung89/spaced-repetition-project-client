import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div id="register" className="welcome">
      <div className="welcome-header">
        <h2>Let's sign up!</h2>
        <RegistrationForm />
        <p>
          Already have an account? Login{' '}
          <Link to="/" className="link">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

// {/* <div id="login" className="welcome">
//   <div className="welcome-header">
//     <h2>Let's log in!</h2>
//     <LoginForm />
//     <Link to="/register" className="register-link">
//       Register
//           </Link>
//   </div>
// </div> */}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
