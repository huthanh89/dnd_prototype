//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  dragOver(event){
    console.log('enter');
    event.preventDefault();
    if (event.target.getAttribute("draggable") === "true"){
      event.dataTransfer.dropEffect = "none"; // dropping is not allowed
    }
    else{
      event.target.classList.add("drag-over");
      event.dataTransfer.dropEffect = "all";
    }
    
  }
  
  dragLeave(event){
    event.target.classList.remove("drag-over");
  }

  dragDrop(event){
    event.preventDefault(); // Stop some browser from redirecting.
    let data = event.dataTransfer.getData("foo");
    console.log(data);
    event.target.appendChild(document.getElementById(data));
    
  }

  render() {
    return (
      <div id="motherboard-image">

        <div id="drag-hotzone-cpu" className="hotspot-cpu" 
          onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}
          onTouchStart={this.touchStart}
        />
        <div id="drag-hotzone-ram" className="hotspot-ram" onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}/>
      
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
