import firebase from 'firebase';

import { GET_TEAM } from './actionTypes';

export function getTeam(){ 
    const request = firebase.firestore().collection('team').get();
    return {
        type: GET_TEAM,
        payload: request
    };
}