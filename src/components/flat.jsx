import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'card active' : 'card'} onClick={this.handleClick} style={{ backgroundImage: `url(${this.props.image})` }}>
        <div className="card-category">
          {this.props.price} {this.props.price_currency}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
