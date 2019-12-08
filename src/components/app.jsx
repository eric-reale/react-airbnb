import React, { Component } from 'react';

import FlatList from './flat_list';
import Flat from './flat';
import GoogleMaps from './google_map';
import Marker from './marker';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
      <div className="map-container">
        <GoogleMaps />
      </div>
      </div>
    );
  }
}

export default App;
