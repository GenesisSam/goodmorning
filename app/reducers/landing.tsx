import { AnyAction } from "redux";
import GLOBAL_ACTION_TYPE from "../actions/types";
export const INIT_LANDING_STORE: Landing.IStore = {
  currentImageSrc: "",
}

export default function reducer(state = INIT_LANDING_STORE, action: AnyAction) {
  switch (action.type) {
    case GLOBAL_ACTION_TYPE.LANDING.CHANGE_BACKGROUND: {
      return {
        currentImageSrc: action.payload.src
      };
    }
    default:
      return state;
  }
}
