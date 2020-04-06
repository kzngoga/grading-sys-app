import { combineReducers } from 'redux';

import user from './user';
import teacher from './teacher';
import student from './student';
import spAdmin from './spAdmin';

export default combineReducers({
  ...user,
  ...teacher,
  ...student,
  ...spAdmin,
});
