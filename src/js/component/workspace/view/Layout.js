//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Header      from './Header.js';
import Motherboard from './Motherboard.js';
import React       from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(){
    super();
    this.states = {
      view: 0,
      position: 'front'
    };
  }

  render() {

    return (
      <div >
        <Header/>
        <Motherboard/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
