/* eslint-disable no-console */
import axios from '..';
import { STD_LOGIN_SUCCESS, STD_LOGIN_FAILED } from '../../actionTypes';

const studentLoginAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/student/login', payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: STD_LOGIN_SUCCESS,
      message,
      studentData: data,
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
      type: STD_LOGIN_FAILED,
      error,
    });
  }
};

export default studentLoginAction;
