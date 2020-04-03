/* eslint-disable no-console */
import axios from '..';
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILED } from '../../actionTypes';

const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/user/login', payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      message,
      userData: data,
    });
  } catch (err) {
    let error = {};
    if (err.response) {
      const {
        data: { status, message },
      } = err.response;
      error = { status, message };
    } else {
      error = {
        status: 500,
        message: err.message,
      };
    }
    dispatch({
      type: ADMIN_LOGIN_FAILED,
      error,
    });
  }
};

export default loginAction;
