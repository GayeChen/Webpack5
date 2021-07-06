import React from 'react'
import ReactDom from 'react-dom';

import('./A');
import('./B');
import('./C');


ReactDom.render(
  <h1>hello webpack4</h1>,
  document.getElementById('root')
);