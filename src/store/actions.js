import { signup as signupReq, login as loginReq } from "../services/auth";
import {
  getCats as getCatsReq,
  deleteCat as deleteCatReq,
  createCat as createCatReq
} from "../services/cats";

export const signup = payload => async dispatch => {
  try {
    dispatch({
      type: "AUTH_START"
    });
    const user = await signupReq(payload);
    dispatch({
      type: "AUTH",
      user
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAIL"
    });
  }
};

export const login = payload => async dispatch => {
  try {
    dispatch({
      type: "AUTH_START"
    });
    const user = await loginReq(payload);
    dispatch({
      type: "AUTH",
      user
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAIL"
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: "LOGOUT"
  });
};

export const getCats = () => async dispatch => {
  try {
    dispatch({
      type: "FETCHING_CATS"
    });
    const cats = await getCatsReq();
    dispatch({
      type: "FETCH_CATS_SUCCESS",
      cats
    });
    return cats;
  } catch (error) {
    dispatch({
      type: "FETCH_CATS_ERROR"
    });
    if (error.type === "Unauthenticated") {
      dispatch({
        type: "LOGOUT"
      });
    }
  }
};

export const deleteCat = (cats, id) => async dispatch => {
  try {
    dispatch({
      type: "FETCHING_CATS"
    });
    await deleteCatReq(id);
    const filteredCats = cats.filter(cat => cat._id !== id);
    dispatch({
      type: "DELETE_CAT_SUCCESS",
      cats: filteredCats
    });
  } catch (error) {
    dispatch({
      type: "FETCH_CATS_ERROR"
    });
    if (error.type === "Unauthenticated") {
      dispatch({
        type: "LOGOUT"
      });
    }
  }
};

export const createCat = (cats, cat) => async dispatch => {
  try {
    dispatch({
      type: "FETCHING_CATS"
    });
    const newCat = await createCatReq(cat);
    const updatedCats = [...cats, newCat];
    dispatch({
      type: "CREATE_CAT_SUCCESS",
      cats: updatedCats
    });
  } catch (error) {
    dispatch({
      type: "FETCH_CATS_ERROR"
    });
    if (error.type === "Unauthenticated") {
      dispatch({
        type: "LOGOUT"
      });
    }
  }
};
