//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Items  from './Items';
import Target from './Target.js';
import Target2 from './Target2.js';
import React  from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  onBeforeDragStart(){
    console.log('before drag start');
  }

  onDragStart(){
    console.log('drag start');
  }

  onDragUpdate(){
    console.log('drag update');
  }

  onDragEnd(){
    console.log('drag end');
  }

  render() {
    return (

      <div>
        <DragDropContext
          onBeforeDragStart={this.onBeforeDragStart}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Target/>
          <Target2/>

        </DragDropContext>


      </div>

    );
  }
}
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
