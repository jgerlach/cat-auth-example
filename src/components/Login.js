import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  handleFormChange = event => {
    this.setState({ [event.target.getAttribute('for')]: event.target.value });
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.login({
      email,
      password
    });
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    } else if (this.props.isFetching) {
      return <div>Logging In...</div>;
    } else {
      return (
        <div>
          <label>Email</label>
          <input type="text" htmlFor="email" onChange={this.handleFormChange} />
          <label>Password</label>
          <input
            type="password"
            htmlFor="password"
            onChange={this.handleFormChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user,
    isFetching: state.isFetching
  };
}

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
