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
    this.clicked = this.clicked.bind(this);
  }
  
  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    let data = JSON.parse(event.dataTransfer.getData('remove'));
    console.log(data);
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
