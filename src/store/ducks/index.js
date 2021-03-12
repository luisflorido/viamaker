import { combineReducers } from 'redux';
import auth from './auth';
import school from './school';
import classes from './classes';
import student from './student';

const rootReducers = combineReducers({ auth, school, classes, student });

export default rootReducers;
