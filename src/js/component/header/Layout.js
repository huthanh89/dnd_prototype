//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import styled   from 'styled-components';
import Timer    from './Timer';
import Navigate from './Navigate';
import React    from 'react';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  margin: 10px 0;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div className="row">
        <Wrapper className="col-12">
          <Timer/>
          <Navigate {...this.props}/>
        </Wrapper>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
