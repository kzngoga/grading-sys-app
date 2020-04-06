import {
  SP_ADMIN_LOGIN_SUCCESS,
  SP_ADMIN_LOGIN_FAILED,
} from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  spAdminData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SP_ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        spAdminData: action.spAdminData,
      };
    case SP_ADMIN_LOGIN_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
