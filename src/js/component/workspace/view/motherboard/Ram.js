//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//

const Hotspot = styled.div`
  background: rgba(255, 0, 0, 0.685);
  width:        60%;
  height:   	  40px;
  position: 	  absolute;
  left:     	  30%;
  top:      	  360px;
  border:   	  dashed rgb(237, 238, 168) 3px;
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
      componentType: 'ram',
    }));
  }

  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    this.props.actionConnectComponent('ram');
  }

  getView(){
    if(this.props.connected){
      return(
        <img id="motherboard-cpu" src='asset/ram.png' 
        draggable="true" onDragStart={this.dragStart}
        style={{
          position: 'absolute',
          width:    '50%',
          height:   '250px',
          left:     '35%',
          top:      '280px'
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
