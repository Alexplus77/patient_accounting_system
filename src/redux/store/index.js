import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { storeReducer } from "redux/reducers/storeReducer";
import { stuffReducer } from "redux/reducers/stuffReducer";

const reducer = combineReducers({
  storeReducer: storeReducer,
  stuffReducer: stuffReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { store };
