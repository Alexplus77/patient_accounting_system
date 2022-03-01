import { FETCH_GET_PATIENTS_LIST, FETCH_NEW_PATIENT } from "./actionsTypes";

export const fetchPatientList = (data) => ({
  type: FETCH_GET_PATIENTS_LIST,
  payload: data,
});

export const fetchNewPatient = () => ({
  type: FETCH_NEW_PATIENT,
});
