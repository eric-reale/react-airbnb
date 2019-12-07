import React, { Component } from 'react';

import FlatList from './flat_list';
import Flat from './flat';
import GoogleMaps from './google_map';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FlatList />
        <Flat />
        <GoogleMaps />
        <Marker />
      </div>
    );
  }
}

export default App;
