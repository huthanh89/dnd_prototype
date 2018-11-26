//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    cpu:         true,
    ram:         false,
    powersupply: false,
    componentID: '0',
    dragItem:     null
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
    case 'CONNECT_COMPONENT': {
      let state         = prevState;
      state[action.componentType] = true;
      return _.clone(state);
    }
    case 'DiSCONNECT_COMPONENT': {
      let state         = prevState;
      state[action.componentType] = false;
      return _.clone(state);
    }
    case 'DRAG_COMPONENT': {
      let state      = prevState;
      state.dragItem = action.component;
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