import axios from "axios";
import { URI } from "../../const";

export const loginAction = (email, password) => async (dispatch) => {
  dispatch({
    type: "loginLoading",
  });
  const res = await axios.post(URI.auth.login, {
    email: email,
    password: password,
  });
  if (res.status === 200) {
    dispatch({
      type: "loginSuccess",
      payload: res.data,
    });
  } else if (res.status === 400) {
    dispatch({
      type: "loginError",
      payload: res.data,
    });
  }
};

export const signUpAction = (user) => async (dispatch) => {
  dispatch({
    type: "SignUpLoading",
  });
  await axios
    .post(URI.auth.signup, {
      email: user.email,
      username: user.username,
      password: user.password,
      password_confirmation: user.password_confirmation,
    })
    .then((response) => {
      if (response.status === 201) {
        dispatch({
          type: "SignUpSuccess",
          payload: true,
        });
      } else {
        console.log(response);
      }
    })
    .catch((err) => {
      console.log(err.config.data);
      dispatch({
        type: "SignUpError",
        payload: err,
      });
    });
};

export const refreshTokenAction = async (refresh) => (dispatch) => {
  dispatch({
    type: "RefreshTokenLoading",
  });
  const res = axios(URI.auth.refresh, {
    refresh: refresh,
  });
  if (res.status === 200) {
    console.log(res.data);
  }
};

export const LogOutAction = () => (dispatch) => {
  dispatch({
    type: "LogOut",
  });
};
