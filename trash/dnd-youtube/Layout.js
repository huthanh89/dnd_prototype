//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   Target            from './Target.js';
import   Item              from './Item.js';
import   React             from 'react';
import { DragDropContext } from 'react-dnd';
import   HTML5Backend      from 'react-dnd-html5-backend';
import   TouchBackend      from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';

//-----------------------------------------------------------------------------//

function handleDrop (id){
  console.log('dropped', id);
}

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(){
    super();

    this.state = {
      items: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
        { id: 3, name: 'item 3' }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.items.map((item, index)=>
              (<Item key={item.id} item={item} handleDrop={()=>handleDrop(item.id)}/>)
            )
          }
        </div>
        <div>
          <Target/>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

//export default DragDropContext(HTML5Backend)(Component);
export default DragDropContext(MultiBackend(HTML5toTouch))(Component);

//-----------------------------------------------------------------------------//
