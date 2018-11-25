//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

    dragStart(event){
        event.dataTransfer.setData("foo", event.target.id);
        console.log(event.target.classList);
    }

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
            <div id="drag-container" onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}>

                <img id="drag1" className="draggable-object" src="asset/ram.png"          draggable="true" onDragStart={this.dragStart} />
                <img id="draga" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="dragb" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="dragc" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="dragd" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="drage" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="drage" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="drage" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="drage" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                <img id="drage" className="draggable-object" src="asset/powersupply.png"  draggable="true" onDragStart={this.dragStart} />
                
                <img id="drag3" className="draggable-object" src="asset/graphic_card.png" 
                draggable="true" onDragStart={this.dragStart}
                onTouchStart={this.touchStart}
                />
        
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
