import React, { Component } from 'react';

class Flat extends Component {
    constructor(props) {
    super(props);
    console.log({props})
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `url({${this.props.image})`}}>
      {this.props.name} {this.props.price}</div>
      )
  }
}

export default Flat;
