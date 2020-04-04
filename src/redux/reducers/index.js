import { combineReducers } from 'redux';

import user from './user';
import teacher from './teacher';

export default combineReducers({
  ...user,
  ...teacher,
});
