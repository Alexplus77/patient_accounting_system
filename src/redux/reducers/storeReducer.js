import {
  FETCH_GET_PATIENTS_LIST,
  FETCH_NEW_PATIENT,
  FETCH_SELECTED_PATIENT,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  SAVE_ERROR,
  IS_LOADING,
} from "redux/actions/actionsTypes";

const initialState = {
  users: [],
  patientList: [],
  selectedPatient: {},
  onEditMode: false,
  errors: {},
  loading: false,
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, loading: true };
    case SAVE_ERROR:
      return { ...state, errors: action.payload, loading: false };
    case EXIT_EDIT_MODE:
      return {
        ...state,
        selectedPatient: {},
        onEditMode: false,
        loading: false,
      };
    case ON_EDIT_MODE:
      return { ...state, onEditMode: true, loading: false };
    case FETCH_NEW_PATIENT:
      return { ...state, isAddPatient: true, errors: {}, loading: false };
    case FETCH_GET_PATIENTS_LIST:
      return {
        ...state,
        patientList: [...action.payload],
        isAddPatient: false,
        errors: {},
        loading: false,
      };
    case FETCH_SELECTED_PATIENT:
      return { ...state, selectedPatient: action.payload, loading: false };

    default:
      return state;
  }
};

export { storeReducer };
