import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAzkCTdM3udh1Pst6nJYewRqudiIa1uto",
    authDomain: "catch-of-the-day-e8ae3.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e8ae3.firebaseio.com",
 
});



const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

// This is a default export
export default base;
