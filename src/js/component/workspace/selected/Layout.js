//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import styled     from 'styled-components';
import Connector  from './Connector.js';
import Item       from './Item.js';
import Components from 'lib/components.js';
import React      from 'react';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

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
      <Wrapper>
        {this.getViews()}
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//