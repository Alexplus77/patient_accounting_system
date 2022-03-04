import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
} from "redux/actions/actionsTypes";

const initialState = {
  users: [],
  patientList: [],
  selectedPatient: {},
  onEditMode: false,
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXIT_EDIT_MODE:
      return { ...state, selectedPatient: {}, onEditMode: false };
    case ON_EDIT_MODE:
      return { ...state, onEditMode: true };
    case FETCH_NEW_PATIENT:
      return { ...state, isAddPatient: true };
    case FETCH_GET_PATIENTS_LIST:
      return {
        ...state,
        patientList: [...action.payload],
        isAddPatient: false,
        selectedPatient: {},
      };
    case FETCH_SELECTED_PATIENT:
      return { ...state, selectedPatient: action.payload };

    default:
      return state;
  }
};

export { storeReducer };
