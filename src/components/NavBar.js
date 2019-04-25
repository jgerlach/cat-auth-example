import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <nav>
        <Link to="/">LOGO</Link>
        {this.props.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : null}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user
  };
}

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
