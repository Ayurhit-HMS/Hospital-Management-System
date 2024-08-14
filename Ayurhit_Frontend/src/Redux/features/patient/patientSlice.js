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
  },
});

export const { setPatientDetails } = patientSlice.actions;
export default patientSlice.reducer;
