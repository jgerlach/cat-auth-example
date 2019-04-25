import React, { Component } from "react";

const styles = {
  img: {
    maxWidth: 200
  },
  title: {
    color: "red"
  }
};

export default class Cat extends Component {
  render() {
    const { cats, cat, deleteCat, user } = this.props;

    return (
      <div className="flex-item">
        {cat.owner === user.id && (
          <>
            <button>Edit</button>
            <button onClick={() => deleteCat(cats, cat._id)}>Delete</button>
          </>
        )}

        <h4>{cat.name}</h4>
        <img src={cat.url} style={styles.img} alt={cat.name} />
        <p>{cat.bio}</p>
      </div>
    );
  }
}
