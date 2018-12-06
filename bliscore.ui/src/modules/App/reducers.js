import { combineReducers } from 'redux';

import TeamReducer from '../OurTeam/reducer';
import Testimonials from '../Testimonials/reducer';

const reducers = combineReducers({
  team: TeamReducer,
  testimonials: Testimonials
});

export default reducers;
