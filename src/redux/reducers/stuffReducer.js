import {
  FETCH_DOCTORS_LIST,
  FETCH_ADMINISTRATORS_LIST,
  FETCH_SELECTED_STUFF,
  SELECTED_ADD_STUFF,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  AUTH_USER,
} from "redux/actions/actionsTypes";

const initialState = {
  doctorsList: [],
  administratorsList: [],
  selectStaff: {},
  selectedAddStuff: "",
  registrationMode: false,
  valueForm: {},
  authUser: {},
};
export const stuffReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authUser: action.payload };
    case EXIT_EDIT_MODE:
      return { ...state, selectStaff: {} };
    case ON_EDIT_MODE:
      return { ...state, selectStaff: {} };
    case FETCH_ADMINISTRATORS_LIST:
      return { ...state, administratorsList: action.payload };
    case SELECTED_ADD_STUFF:
      return { ...state, selectedAddStuff: action.payload };
    case FETCH_SELECTED_STUFF:
      return { ...state, selectStaff: action.payload };
    case FETCH_DOCTORS_LIST:
      return { ...state, doctorsList: action.payload };
    default:
      return state;
  }
};
