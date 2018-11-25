//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    scenarioID:  '',
    inventory:   [],
    workspace:{
      views: [
        { device: 'power_supply' },
        { device: 'wall_outlet'  },
        { device: 'monitor'      },
        { device: 'computer'     }
      ],
    },
    componentID: '0'
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){
    case 'SELECT_COMPONENT': {
      let state         = prevState;
      state.componentID = action.componentID;
      return _.clone(state);
    }
    default: {
      return prevState;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer;

//-----------------------------------------------------------------------------//