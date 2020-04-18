/* eslint-disable no-console */
import axios from '..';
import {
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_SINGLE_USER_FAILED,
} from '../../actionTypes';

const token = localStorage.getItem('SpAdminToken');
const getSingleUserAction = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/users/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      data: { message, data },
    } = response;
    dispatch({
      type: FETCH_SINGLE_USER_SUCCESS,
      message,
      results: data,
    });
    console.log(response.data.data);
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
      type: FETCH_SINGLE_USER_FAILED,
      error,
    });
    // console.log(err.response.data);
  }
};

export default getSingleUserAction;
