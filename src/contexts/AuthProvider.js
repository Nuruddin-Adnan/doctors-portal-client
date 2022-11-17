import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const updateUserProfile = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    const notify = (message) => toast.success(message, {
        position: 'top-right',
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        notify,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;