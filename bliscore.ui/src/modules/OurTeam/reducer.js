import _ from 'lodash';

import { GET_TEAM } from './actionTypes';

export default function(state = {}, action){
    switch(action.type){
        case GET_TEAM:
        const team = action.payload.docs.map(function(doc){ return doc.data();})
        return {
            ...state,
            ...team
        };
        default: return state;
    }
}