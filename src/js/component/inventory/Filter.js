//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  render() {
    return (
      <div className="dropdown mb-2">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Show All</a>
          <a className="dropdown-item" href="#">Cables</a>
          <a className="dropdown-item" href="#">Monitors</a>
          <a className="dropdown-item" href="#">Input Devices</a>
          <a className="dropdown-item" href="#">Outlets</a>
          <a className="dropdown-item" href="#">Printers</a>
          <a className="dropdown-item" href="#">Speakers</a>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
