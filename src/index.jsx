
import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Person } from './components/Person';
import { People } from './components/People';
import { Nameday } from './components/Nameday';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 9</h1>
      
      <Person />
      <hr />
      <People />
      <hr />
      <Nameday />

    </>
  );
}

render(<App />, document.querySelector('#app'));