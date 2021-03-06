import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        userData: action.userData,
      };
    case USER_LOGIN_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
