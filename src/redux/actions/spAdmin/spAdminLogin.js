/* eslint-disable no-console */
import axios from '..';
import {
  SP_ADMIN_LOGIN_SUCCESS,
  SP_ADMIN_LOGIN_FAILED,
} from '../../actionTypes';

const spAdminLoginAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      '/api/v1/user/superadmin/login',
      payload,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    );
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: SP_ADMIN_LOGIN_SUCCESS,
      message,
      spAdminData: data,
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
      type: SP_ADMIN_LOGIN_FAILED,
      error,
    });
  }
};

export default spAdminLoginAction;
