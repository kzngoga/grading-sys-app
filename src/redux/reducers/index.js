import { combineReducers } from 'redux';

import user from './user';
import teacher from './teacher';
import student from './student';

export default combineReducers({
  ...user,
  ...teacher,
  ...student,
});
