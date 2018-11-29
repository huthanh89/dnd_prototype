//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import CPU    from './CPU.js';
import Ram    from './Ram.js';
import React  from 'react';
import styled from 'styled-components';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  background-image:    url("../asset/motherboard.png");
  background-repeat:   no-repeat;
  background-position: center;
  background-size:     100% 100%;
  min-height:          500px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <Wrapper>
        {<CPU connected={this.props.cpu} {...this.props}/>}
        {<Ram connected={this.props.ram} {...this.props}/>}
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
