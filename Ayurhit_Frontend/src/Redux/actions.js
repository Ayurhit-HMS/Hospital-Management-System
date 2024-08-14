import { persistor } from './store';

export const SET_PATIENT_DETAILS = 'SET_PATIENT_DETAILS';

export const setPatientDetails = (patient) => ({
    type: SET_PATIENT_DETAILS,
    payload: patient,
});


export const LOGOUT = 'LOGOUT';

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
        persistor.purge();
    };
};