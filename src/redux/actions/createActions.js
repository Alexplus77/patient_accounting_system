import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
} from "./actionsTypes";

export const fetchPatientList = (data) => ({
  type: FETCH_GET_PATIENTS_LIST,
  payload: data,
});

export const fetchNewPatient = () => ({
  type: FETCH_NEW_PATIENT,
});

export const fetch_selected_patient = (data) => ({
  type: FETCH_SELECTED_PATIENT,
  payload: data,
});

export const on_edit_mode = () => ({
  type: ON_EDIT_MODE,
});
export const exit_edit_mode = () => ({
  type: EXIT_EDIT_MODE,
});
