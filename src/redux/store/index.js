import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { storeReducer } from "redux/reducers/storeReducer";
const reducer = combineReducers({
  storeReducer: storeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { store };
