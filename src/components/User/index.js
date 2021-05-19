import React from 'react';
import {Avatar, Button} from "@material-ui/core";
import firebase from "firebase";
import {signOut} from "../../redux/authReducer";
import {useDispatch} from "react-redux";
import {GrStatusGood} from "react-icons/all";

const User = ({user: {name, email, picture, verifiedEmail}}) => {
    const dispatch = useDispatch();

    const handleSignOut = async () =>{
        await firebase.auth().signOut();
        dispatch(signOut());
    }

    return (
        <div>
            <Avatar src={picture} alt={'user avatar'} style={{width: '100px', height: '100px'} }/>
            <h3>{name}</h3>
            <div><b>{verifiedEmail && <GrStatusGood/>} Email:</b> {email}</div><br/>
            <Button variant={'contained'} color={'secondary'} onClick={handleSignOut}>Sign Out</Button>
        </div>
    );
};

export default User;