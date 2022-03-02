import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
} from "redux/actions/actionsTypes";

const initialState = {
  users: [],
  patientList: [],
  selectedPatient: {},
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_PATIENT:
      return { ...state, isAddPatient: true };
    case FETCH_GET_PATIENTS_LIST:
      return {
        ...state,
        patientList: [...action.payload],
        isAddPatient: false,
      };
    case FETCH_SELECTED_PATIENT:
      return { ...state, selectedPatient: action.payload };

    default:
      return state;
  }
};

export { storeReducer };
