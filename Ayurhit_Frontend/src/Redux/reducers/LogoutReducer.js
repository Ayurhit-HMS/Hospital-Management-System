import { LOGOUT } from './actions';

const initialState = {
    isAuthenticated: true
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {isAuthenticated: false}; 
        default:
            return state;
    }
};

export default rootReducer;