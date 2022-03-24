import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_GET_DOCTORS_APPOINTMENT_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  SAVE_ERROR,
  IS_LOADING,
  FETCH_NEW_DOCTOR,
  FETCH_DOCTORS_LIST,
  FETCH_SELECTED_STUFF,
  SELECTED_ADD_STUFF,
  FETCH_NEW_ADMINISTRATOR,
  FETCH_ADMINISTRATORS_LIST,
  AUTH_USER,
  LOGOUT,
  IS_AUTH,
  FORM_IS_VISIBLE,
} from "./actionsTypes";

export const fetch_doctorsAppointmentList = (data) => ({
  type: FETCH_GET_DOCTORS_APPOINTMENT_LIST,
  payload: data,
});
export const is_form_visible = (data) => ({
  type: FORM_IS_VISIBLE,
  payload: data,
});
export const is_auth = () => ({
  type: IS_AUTH,
});
export const log_out = () => ({
  type: LOGOUT,
});
export const auth_user = (data) => ({
  type: AUTH_USER,
  payload: data,
});
export const add_selected_stuff = (data) => ({
  type: SELECTED_ADD_STUFF,
  payload: data,
});
export const fetch_selected_stuff = (data) => ({
  type: FETCH_SELECTED_STUFF,
  payload: data,
});
export const fetchDoctorsList = (data) => ({
  type: FETCH_DOCTORS_LIST,
  payload: data,
});
export const fetchAdministratorsList = (data) => ({
  type: FETCH_ADMINISTRATORS_LIST,
  payload: data,
});
export const is_loading = () => ({
  type: IS_LOADING,
});

export const fetchPatientList = (data) => ({
  type: FETCH_GET_PATIENTS_LIST,
  payload: data,
});

export const fetchNewPatient = () => ({
  type: FETCH_NEW_PATIENT,
});
export const fetchNewAdministrator = () => ({
  type: FETCH_NEW_ADMINISTRATOR,
});
export const fetchNewDoctor = () => ({
  type: FETCH_NEW_DOCTOR,
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
export const save_error = (error) => ({
  type: SAVE_ERROR,
  payload: error,
});
