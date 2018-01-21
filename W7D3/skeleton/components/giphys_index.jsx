import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({ giphys }) => (
  <ul>
    { giphys.map(giphy => <GiphysIndexItem giphy={giphy} key={giphy.images.fixed_height.url}/>) }
  </ul>
);

export default GiphysIndex;
