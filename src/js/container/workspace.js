//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   Component from '../component/workspace/Layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionChangeLocation: function (location){
            return dispatch({
                type:   'CHANGE_LOCATION',
                location: location
            });
        },
        actionChangeView: function (view){
            return dispatch({
                type: 'CHANGE_VIEW',
                view:  view
            });
        },
    };
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

//-----------------------------------------------------------------------------//