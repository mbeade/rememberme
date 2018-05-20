import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCMZ0dIAS2Mp1tHR2mUua70qggBgBkkx54",
    authDomain: "my-links-6e4af.firebaseapp.com",
    databaseURL: "https://my-links-6e4af.firebaseio.com",
    projectId: "my-links-6e4af",
    storageBucket: "my-links-6e4af.appspot.com",
    messagingSenderId: "803014259647"
};

firebase.initializeApp(config);

export default firebase.database().ref();