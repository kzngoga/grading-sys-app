import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        userData: action.userData,
      };
    case ADMIN_LOGIN_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
