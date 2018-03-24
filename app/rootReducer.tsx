import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// child reducers
import landingReducer, { INIT_LANDING_STORE } from "./reducers/landing";

export const INITIAL_APP_STORE_STATE = {
  landing: INIT_LANDING_STORE,
};

const reducers = {
  landing: landingReducer,
  router: routerReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
