import GLOBAL_ACTION_TYPE from "./types";

export function changeBGImage(src: string) {
  return {
    type: GLOBAL_ACTION_TYPE.LANDING.CHANGE_BACKGROUND,
    payload: {
      src,
    }
  };
}

