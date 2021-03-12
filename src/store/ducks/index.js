import { combineReducers } from 'redux';
import auth from './auth';
import school from './school';

const rootReducers = combineReducers({ auth, school });

export default rootReducers;
