import { SET_USER, CLEAR_USER } from "redux/action/types";

const initialUserState = {
  currentUser: null,
  isLoading: true,
};
//
export default function user_reducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
