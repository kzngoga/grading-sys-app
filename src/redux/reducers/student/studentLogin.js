import { STD_LOGIN_SUCCESS, STD_LOGIN_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  studentData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STD_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        studentData: action.studentData,
      };
    case STD_LOGIN_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
