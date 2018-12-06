import _ from 'lodash';

import { GET_TESTIMONIALS } from './actionTypes';

export default function(state={}, action){
    switch(action.type){
        case GET_TESTIMONIALS:
        if(!action.payload.docs) return state;
        const testimonials = action.payload.docs.map(function(doc){ return doc.data()});
        return {
            ...state,
            ...testimonials
        }
        default: return state;
    }
}