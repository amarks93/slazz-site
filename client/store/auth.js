import axios from "axios";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";

const setLoggedIn = ({ email, firstName, lastName }) => ({
  type: LOGIN,
  payload: { email, firstName, lastName },
});

export const setLoggedOut = () => ({ type: LOGOUT });

const updateUser = ({ email, firstName, lastName }) => ({
  type: UPDATE_USER,
  payload: { email, firstName, lastName },
});

export const loadUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/auth/load");
      dispatch(setLoggedIn(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const authenticateLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      console.log("IN AUTHENTICATE LOGIN", data);
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
  return async (dispatch) => {
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
      };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
