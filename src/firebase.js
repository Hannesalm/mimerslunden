import {
    initializeApp
} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyBPr-WhTA57jIAIMUZMGsxM_97qC5neA4Q",
    authDomain: "mimerslunden-37138.firebaseapp.com",
    databaseURL: "https://mimerslunden-37138.firebaseio.com",
    projectId: "mimerslunden-37138",
    storageBucket: "mimerslunden-37138.appspot.com",
    messagingSenderId: "183012833196"
});

export const db = app.database();
export const recordRef = db.ref('record');