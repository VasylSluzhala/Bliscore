import firebase from 'firebase';

import { GET_TESTIMONIALS } from './actionTypes';

export function getTestimonials(){
    const request = firebase.firestore().collection("testimonials").get();
    return {
        type: GET_TESTIMONIALS,
        payload: request
    }
}