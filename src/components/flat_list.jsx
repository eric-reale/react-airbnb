import React, { Component } from 'react';

import Flat from './flat.jsx';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat
        name={flat.name}
        key={flat.name}
        price={flat.price}
        image={flat.imageUrl}
        price_currency={flat.priceCurrency}
        lat={flat.lat}
        lng={flat.lng} />)}
    }
    </div>
  );
};

export default FlatList;
