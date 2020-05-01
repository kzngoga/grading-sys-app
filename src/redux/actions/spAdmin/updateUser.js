/* eslint-disable no-console */
import axios from '..';
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILED } from '../../actionTypes';

const token = localStorage.getItem('SpAdminToken');
const updateUserAction = (id, payload) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `/api/v1/users/role/update/${id}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: UPDATE_USER_SUCCESS,
      message,
      results: data,
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
      type: UPDATE_USER_FAILED,
      error,
    });
  }
};

export default updateUserAction;
