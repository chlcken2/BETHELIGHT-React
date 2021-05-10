import { combineReducers } from "redux";
import user from "./user_reducer";
// import chatRoom from "./charRoom_reducer";

const rootReducer = combineReducers({
  user,
  //   chatRoom,
});
export default rootReducer;
