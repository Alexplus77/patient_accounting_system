import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  SAVE_ERROR,
} from "redux/actions/actionsTypes";

const initialState = {
  users: [],
  patientList: [],
  selectedPatient: {},
  onEditMode: false,
  errors: {},
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ERROR:
      return { ...state, errors: action.payload };
    case EXIT_EDIT_MODE:
      return { ...state, selectedPatient: {}, onEditMode: false };
    case ON_EDIT_MODE:
      return { ...state, onEditMode: true };
    case FETCH_NEW_PATIENT:
      return { ...state, isAddPatient: true, errors: {} };
    case FETCH_GET_PATIENTS_LIST:
      return {
        ...state,
        patientList: [...action.payload],
        isAddPatient: false,
        selectedPatient: {},
        errors: {},
      };
    case FETCH_SELECTED_PATIENT:
      return { ...state, selectedPatient: action.payload };

    default:
      return state;
  }
};

export { storeReducer };
