import { logout } from "../services/util";

if (localStorage.getItem("user") === "undefined") {
  localStorage.removeItem("user");
}
const initialUser = localStorage.getItem("user");
const initialState = {
  isFetching: false,
  user: initialUser ? JSON.parse(initialUser) : null
};

const rootReducer = (state = initialState, action) => {
  console.log("action:", action);
  if (!localStorage.getItem("user")) {
    localStorage.removeItem("token");
  }
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        user: action.user,
        isFetching: false,
        errMsg: undefined
      };
    case "AUTH_START":
      return { ...state, isFetching: true };
    case "AUTH_FAIL":
      return { ...state, isFetching: false, errMsg: "Invalid Credentials" };
    case "FETCHING_CATS":
      return { ...state, isFetching: true };
    case "FETCH_CATS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        cats: action.cats,
        errMsg: undefined
      };
    case "DELETE_CAT_SUCCESS":
      return {
        ...state,
        isFetching: false,
        cats: action.cats,
        errMsg: undefined
      };
    case "CREATE_CAT_SUCCESS":
      return {
        ...state,
        isFetching: false,
        cats: action.cats,
        errMsg: undefined
      };
    case "FETCH_CATS_ERROR":
      return { ...state, isFetching: false, errMsg: "Error getting cats" };
    case "LOGOUT":
      logout();
      return { ...state, user: null };
    default:
      return state;
  }
};

export default rootReducer;
