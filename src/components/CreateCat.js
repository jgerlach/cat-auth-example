import React from "react";

export default class CreateCat extends React.Component {
  state = {
    name: "",
    url: "",
    bio: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cats, createNewCat } = this.props;
    return (
      <div className="flex-item">
        <label>
          Cat name
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Cat Image Url
          <input type="text" name="url" onChange={this.handleChange} />
        </label>
        <label>
          Cat Bio
          <textarea
            name="bio"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
        </label>
        <button
          onClick={() =>
            createNewCat(cats, {
              name: this.state.name,
              url: this.state.url,
              bio: this.state.bio
            })
          }
        >
          Create Cat
        </button>
      </div>
    );
  }
}
