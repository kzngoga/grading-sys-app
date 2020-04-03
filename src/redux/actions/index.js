/* eslint-disable consistent-return */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://grading-system-backend.herokuapp.com',
});
