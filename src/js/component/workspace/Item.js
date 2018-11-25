//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  border:     1px solid black;
  font-size:  18px;
  padding:    5px;
  background: #e6e6e6;
  width:      100%;
`;

const BtnWrapper = styled.div`
  position: relative;
  top:      25px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(){
    super();
    this.select = this.select.bind(this);
  }

  select(){
    this.props.selectItem(this.props.id);
  }

  render() {
    return (
      <Wrapper className="row">
        <div className="col-3">
          <img className="draggable-object" src={`asset/${this.props.img}.png`} />
        </div>
        <div className="col-9">
          <span className="d-block">{this.props.name}</span>
          <span className="d-block">{this.props.type}</span>
          <span className="d-block">connected: {this.props.connected.toString()}</span>
        </div>
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//