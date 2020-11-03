import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../Redux/Reducers/auth";
import { GatherReducer } from "../Redux/Reducers/gather";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  AuthReducer: AuthReducer,
  GatherReducer: GatherReducer,
});

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

