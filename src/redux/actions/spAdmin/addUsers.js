/* eslint-disable no-console */
import axios from '..';
import { ADD_USER_SUCCESS, ADD_USER_FAILED } from '../../actionTypes';

const token = localStorage.getItem('SpAdminToken');
const addUsersAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/users/new', payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      data: { message },
    } = response;
    dispatch({
      type: ADD_USER_SUCCESS,
      message,
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
      type: ADD_USER_FAILED,
      error,
    });

  }
};

export default addUsersAction;
