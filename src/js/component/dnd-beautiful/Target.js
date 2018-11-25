//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

const Container = styled.div`
  border: 1px solid grey;
  height: 100px;
  width:  300px;
  font-size: 20px;
  font-weight: bold;
`;

class Component extends React.Component {


  constructor(){
    super();
    this.state = {
      items: [
        {id: 1, content: 'bob'},
        {id: 2, content: 'foob'}
      ]
    };
  }

  render() {
    return (
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (

          <div
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
          >

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
            
            <Draggable draggableId="draggable-2" index={1}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <h4>My asdf</h4>
                </div>
              )}
            </Draggable>

          </div>
        
        
        
        )}
      </Droppable>
    );
  }
}
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
