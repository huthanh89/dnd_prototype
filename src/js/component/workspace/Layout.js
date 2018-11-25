//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Selected    from './Selected.js';
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
      <div className="row">

        <div className="col-lg-6 bg-warning">
          <div className="col-12">
            <Selected {...this.props}/>
          </div>
        </div>

        <div className="col-lg-6 bg-dark">

          <div className="row">
            <div className="col-12">
              <button className="btn btn-secondary float-left mr-2">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="btn btn-secondary float-left">
                <i className="fas fa-arrow-right"></i>
              </button>

              <div className="dropdown float-right">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search-plus mr-2"></i>
                  <span>View</span>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Front</a>
                  <a className="dropdown-item" href="#">Back</a>
                  <a className="dropdown-item" href="#">Motherboard</a>
                  <a className="dropdown-item" href="#">Drive Bays</a>
                </div>
              </div>
              <Motherboard/>
            </div>

          </div>

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
