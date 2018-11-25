//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   React        from 'react';
import { DragSource } from 'react-dnd';

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

        const { isDragging, connectDragSource, item } = this.props;

        const opacity = isDragging? 0:1;
        console.log(this.props);

        return connectDragSource(
            <p className="list-item" style={{opacity}}>
                {item.name}
            </p>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default DragSource('item', spec, collect)(Component);

//-----------------------------------------------------------------------------//
