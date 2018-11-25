//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import Connector  from './Connector.js';
import Item       from './Item.js';
import Components from 'lib/components.js';
import React      from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  constructor(props){
    super();
    this.component = _.find(Components, (component) =>{
      return component.id === props.componentID;
    });
  }

  getViews(){
    let result = [];
    result.push(<Item {...this.component} key={this.component.id}/>);
    if(this.component.connectors){
      _.forEach(this.component.connectors, (component)=>{
        result.push(<Connector {...component} key={component.id}/>);
      });
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.getViews()}
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
