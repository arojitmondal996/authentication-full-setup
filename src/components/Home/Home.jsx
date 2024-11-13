import React from 'react';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import auth from '../firebase/Firebase.config';

const Home = () => {
    // Google Provider
    const googleProvider = new GoogleAuthProvider();
    // Github Provider
    const githubProvider = new GithubAuthProvider();

    // Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result)
        })
    }
    // Github Login
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google login</button>
            <button onClick={handleGithubLogin}>Github login</button>
        </div>
    );
};

export default Home;