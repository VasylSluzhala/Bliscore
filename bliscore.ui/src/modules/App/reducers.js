import { combineReducers } from 'redux';

import TeamReducer from '../OurTeam/reducer';

const reducers = combineReducers({
  team: TeamReducer
});

export default reducers;
