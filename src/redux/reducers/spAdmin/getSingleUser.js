import {
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_SINGLE_USER_FAILED,
} from '../../actionTypes';

const initialState = {
  status: '',
  message: '',
  results: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USER_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.message,
        results: action.results,
      };
    case FETCH_SINGLE_USER_FAILED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
