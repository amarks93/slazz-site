import axios from "axios";

import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from "../constants";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";

const SET_USER_FETCH_STATUS = "SET_USER_FETCH_STATUS";

const setUserFetchStatus = (status) => {
  return {
    type: SET_USER_FETCH_STATUS,
    status,
  };
};

const setLoggedIn = ({ email, firstName, lastName }) => ({
  type: LOGIN,
  payload: { email, firstName, lastName },
});

const setLoggedOut = () => ({ type: LOGOUT });

const updateUser = ({ email, firstName, lastName }) => ({
  type: UPDATE_USER,
  payload: { email, firstName, lastName },
});

export const loadUser = () => {
  return async (dispatch) => {
    try {
      dispatch(setUserFetchStatus(FETCH_PENDING));
      const { data } = await axios.get("/auth/load");
      dispatch(setLoggedIn(data));
      dispatch(setUserFetchStatus(FETCH_SUCCESS));
    } catch (err) {
      dispatch(setUserFetchStatus(FETCH_FAILED));
      console.log(err);
    }
  };
};

export const authenticateLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      dispatch(loadUser());
    } catch (error) {
      console.log(error);
    }
  };
};

export const authenticateSignUp = (email, firstName, lastName, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        email,
        firstName,
        lastName,
        password,
      });
      dispatch(setLoggedIn(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/auth/logout");
      dispatch(setLoggedOut());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserThunk = (email, firstName, lastName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/auth/updateUser", {
        email,
        firstName,
        lastName,
      });
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePassword = (currentPassword, newPassword) => {
  return async () => {
    try {
      const response = await axios.put("/auth/updatePassword", {
        currentPassword,
        newPassword,
      });
      if (response.status == 401) {
        return "Current password is incorrect";
      } else {
        return "Password successfully changed";
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  loggedIn: false,
  fetchStatus: FETCH_PENDING,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload, loggedIn: true };
    case LOGOUT:
      return {
        ...state,
        email: "",
        firstName: "",
        lastName: "",
        loggedIn: false,
        fetchStatus: FETCH_PENDING,
      };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case SET_USER_FETCH_STATUS:
      return { ...state, fetchStatus: action.status };
    default:
      return state;
  }
}
