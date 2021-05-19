import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1KwVgR1n2wUPTp4UHIEQu5mm2XdoJdkw",
    authDomain: "fir-auth-790a8.firebaseapp.com",
    projectId: "fir-auth-790a8",
    storageBucket: "fir-auth-790a8.appspot.com",
    messagingSenderId: "196051027082",
    appId: "1:196051027082:web:e6c36e65dd1feba5579973",
    measurementId: "G-V4KXT035X8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceBookProvider = new firebase.auth.FacebookAuthProvider();

export {googleProvider, faceBookProvider, auth}
