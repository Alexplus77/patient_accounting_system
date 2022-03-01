import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
} from "redux/actions/actionsTypes";

const initialState = {
  users: [],
  patientList: [],
  isAddPatient: false,
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_PATIENT:
      return { ...state, isAddPatient: true };
    case FETCH_GET_PATIENTS_LIST:
      return {
        ...state,
        patientList: [...state.patientList, ...action.payload],
        isAddPatient: false,
      };

    default:
      return state;
  }
};

export { storeReducer };
