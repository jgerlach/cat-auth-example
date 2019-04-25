import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getCats, deleteCat, createCat } from "../store/actions";

import Cat from "./Cat";
import CreateCat from "./CreateCat";

class Home extends Component {
  componentDidMount() {
    this.props.getCats();
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else if (this.props.cats) {
      return (
        <div className="flex-container">
          {this.props.cats.map(cat => (
            <Cat
              key={cat._id}
              cats={this.props.cats}
              cat={cat}
              deleteCat={this.props.deleteCat}
              user={this.props.user}
            />
          ))}
          <CreateCat
            cats={this.props.cats}
            createNewCat={this.props.createCat}
          />
        </div>
      );
    } else {
      return <div>Loading Cats...</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user,
    cats: state.cats,
    user: state.user
  };
}

const mapDispatchToProps = {
  getCats,
  deleteCat,
  createCat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
