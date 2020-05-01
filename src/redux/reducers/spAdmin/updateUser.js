import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
      };
    case UPDATE_USER_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
