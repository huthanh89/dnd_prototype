//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(){
    super();
    this.clicked  = this.clicked.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }
  
  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    let data = JSON.parse(event.dataTransfer.getData('component'));
    this.props.actionDisconnectComponent(data.componentType);
  }

  clicked(){
    this.props.history.push('/inventory');
  }

  render() {
    return (
      <button className="btn btn-secondary" onClick={this.clicked}
        onDrop={this.dragDrop} onDragOver={this.dragOver}
      >
        <i className="fas fa-box-open"></i>
      </button>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
