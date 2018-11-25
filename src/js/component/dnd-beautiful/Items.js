//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Target from './Target.js';
import React  from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  render() {
    return (

        <Draggable draggableId="draggable-1" index={0}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h4>My draggable</h4>
            </div>
          )}
        </Draggable>


    );
  }
}
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
