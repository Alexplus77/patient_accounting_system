import {
  FETCH_DOCTORS_LIST,
  FETCH_ADMINISTRATORS_LIST,
  FETCH_SELECTED_STUFF,
  SELECTED_ADD_STUFF,
  ON_EDIT_MODE,
  EXIT_EDIT_MODE,
  AUTH_USER,
  LOGOUT,
} from "redux/actions/actionsTypes";

const initialState = {
  doctorsList: [],
  administratorsList: [],
  selectStaff: {},
  selectedAddStuff: "",
  registrationMode: false,
  valueForm: {},
  authUser: {},
  isAuth: null,
};
export const stuffReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, authUser: {}, isAuth: false };
    case AUTH_USER:
      return { ...state, authUser: action.payload, isAuth: true };
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
