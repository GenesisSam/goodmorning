import { Reducer } from "redux";
import { RouterState } from "react-router-redux";

declare namespace AppReducer {
  interface IStore extends Readonly<{
    landing: Landing.IStore
    router: Reducer<RouterState>
  }> { }
}
