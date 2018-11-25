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
        <div className="col-7">
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
        </div>
        <div className="col-2"> 
          <BtnWrapper className="float-right">
            <button className="btn btn-info" onClick={this.select}>Select</button>
          </BtnWrapper>
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