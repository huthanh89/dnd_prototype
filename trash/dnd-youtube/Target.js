//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React        from 'react';
import { DragTarget } from 'react-dnd';

//-----------------------------------------------------------------------------//

// Allowed methods on the drag source.

const spec = {
    beginDrag(props){
        console.log('isdraggin');
        return props.item;
    },
    endDrag(props, monitor, component){
        return props.handleDrop(props.item.id);
    }
};

// Props to injected into the component.

function collect(connect, monitor){
    return{
        connectDragSource:  connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging:         monitor.isDragging()
    };
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

    render() {
        return (
            <div className="target">
                Target
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

//export default DropTarget('item', spec, collect)(Component);

export default Component;

//-----------------------------------------------------------------------------//
