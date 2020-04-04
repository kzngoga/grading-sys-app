import { TCHR_LOGIN_SUCCESS, TCHR_LOGIN_FAILED } from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  teacherData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TCHR_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        teacherData: action.teacherData,
      };
    case TCHR_LOGIN_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
