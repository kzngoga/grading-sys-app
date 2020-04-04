/* eslint-disable no-console */
import axios from '..';
import { TCHR_LOGIN_SUCCESS, TCHR_LOGIN_FAILED } from '../../actionTypes';

const teacherLoginAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/teacher/login', payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: TCHR_LOGIN_SUCCESS,
      message,
      teacherData: data,
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
      type: TCHR_LOGIN_FAILED,
      error,
    });
  }
};

export default teacherLoginAction;
