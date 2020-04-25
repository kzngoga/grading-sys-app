import { ADD_USER_SUCCESS, ADD_USER_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
      };
    case ADD_USER_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
