import { combineReducers } from 'redux';
import patientReducer from './features/patient/patientSlice';
import { LOGOUT } from './actions';

const initialAuthState = {
    isAuthenticated: false,
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,  // Set to true after successful login
            };
        case 'LOGIN_FAILURE':
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,  // Reset on logout or failure
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    auth: authReducer,
    patient: patientReducer,
});

export default rootReducer;
