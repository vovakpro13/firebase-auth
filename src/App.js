import React, {useEffect} from "react";
import {auth, signIn, signOut} from "./redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {googleProvider} from "./firebase";
import firebase from "firebase";
import {FcGoogle} from "react-icons/all";
import User from './components/User'
import './App.css';

function App() {
    const {user, isAuth} = useSelector(auth);
    const dispatch = useDispatch();

    useEffect(() => firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(signIn({
                name: user.displayName,
                email: user.email,
                picture: user.photoURL,
                verifiedEmail: user.emailVerified
            }));
        }
    }), []);

    const googleSignIn = async () => {
        const result = await firebase.auth().signInWithPopup(googleProvider);
        const {additionalUserInfo: {profile: {name, email, picture, verified_email}}} = result;
        dispatch(signIn({name, email, picture, verifiedEmail: verified_email}));
    }

    return (
        <div className="App">
            {
                isAuth
                    ? <User user={user}/>
                    : <Button variant={'outlined'} onClick={googleSignIn} startIcon={<FcGoogle/>}> Sign In  </Button>
            }
        </div>
    );
}

export default App;
