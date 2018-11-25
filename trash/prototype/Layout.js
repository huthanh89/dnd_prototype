//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Timer     from './Timer';
import Navigate  from './Navigate';
import Inventory from './Inventory';
import Workspace from './workspace/layout.js';
import Selected  from './Selected';
import React     from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Timer {...this.props}/>
          <Navigate {...this.props}/>
        </div>
        <div className="col-lg-6 bg-warning">
          <Workspace {...this.props}/>
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
