import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/actions';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };
  handleFormChange = event => {
    this.setState({ [event.target.getAttribute('for')]: event.target.value });
  };
  handleSubmit = () => {
    const { name, email, password } = this.state;
    this.props.signup({
      name,
      email,
      password
    });
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    } else if (this.props.isFetching) {
      return <div>Signing Up...</div>;
    } else {
      return (
        <div>
          <label>Name</label>
          <input type="text" htmlFor="name" onChange={this.handleFormChange} />
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
  signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
