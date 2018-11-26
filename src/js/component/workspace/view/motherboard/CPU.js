//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  
  dragStart(event){
    console.log('setting data');
    let data = {
      foo: 'bar',
    };
    event.dataTransfer.setData("remove", JSON.stringify(data));
  }

  getCPU(){
    if(this.props.connected){
      return(
        <img id="motherboard-cpu" src='asset/cpu.png' 
        draggable="true" onDragStart={this.dragStart}
        style={{
          position: 'relative',
          width:    '100px',
          height:   '100px',
          left:     '60%',
          top:      '140px'
        }}
        />
      );
    }
    else{
      return(
        <div className="hotspot-cpu-unconnected" 
          onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}
        />
      );
    }
  }

  render() {
    return this.getCPU();
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
