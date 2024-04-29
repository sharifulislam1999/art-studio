import { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from './firebase.config';
export const MyAuth = createContext(null);
const AuthProvier = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    const createUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const signPop = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const logInWithPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            unSubscribe();
        }

    },[])
    const autoValue= {createUser,user,signPop,logInWithPassword,loader}
    return (
        <MyAuth.Provider value={autoValue}>
            {children}
        </MyAuth.Provider>
    );
};
AuthProvier.propTypes ={
    children: PropTypes.node
}
export default AuthProvier;