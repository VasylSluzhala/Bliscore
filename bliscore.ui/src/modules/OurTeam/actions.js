import firebase from 'firebase';

import { GET_TEAM } from './actionTypes';

export function getTeam(){ 
    const request = firebase.firestore().collection('team').get();
    return {
        type: GET_TEAM,
        payload: request
    };
    // firebase.firestore().collection('team').get()
    //       .then(function(snapshot){    
    //           debugger;   
    //           {
    //             type: GET_TEAM,
    //             payload: snapshot.val()
    //         };
    //       });
        }