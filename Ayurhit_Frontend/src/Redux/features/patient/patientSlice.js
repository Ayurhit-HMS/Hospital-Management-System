import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patient: null,
  },
  reducers: {
    setPatientDetails: (state, action) => {
      state.patient = action.payload;
    },
    logout : (state) =>{
      state.patient=null
    }
  },
});

export const { setPatientDetails,logout } = patientSlice.actions;
export default patientSlice.reducer;
