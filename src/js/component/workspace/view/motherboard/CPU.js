//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//

const Hotspot = styled.div`
  background: rgba(255, 0, 0, 0.699);
  width:      15%;
  height:     100px;
  position:   absolute;
  left: 		  68%;
  top:  		  180px;
  border: 	  dashed rgb(237, 238, 168) 3px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  
  constructor(){
    super();
    this.dragDrop = this.dragDrop.bind(this);
  }

  dragStart(event){
    event.dataTransfer.setData("component", JSON.stringify({
      componentType: 'cpu',
    }));
  }

  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    this.props.actionConnectComponent('cpu');
  }

  getView(){
    if(this.props.connected){
      return(
        <img id="motherboard-cpu" src='asset/cpu.png' 
          draggable="true" onDragStart={this.dragStart}
          style={{
            position: 'relative',
            width:    '100px',
            height:   '100px',
            left:     '70%',
            top:      '140px'
          }}
        />
      );
    }
    else{
      return(
        <Hotspot onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}/>
      );
    }
  }

  render() {
    return this.getView();
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
