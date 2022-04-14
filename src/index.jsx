
import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Komponenta from './components/Komponenta';
import People from './components/People';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 9</h1>
      
      <Person />
      <hr />
      <People />
      
    </>
  );
}

render(<App />, document.querySelector('#app'));