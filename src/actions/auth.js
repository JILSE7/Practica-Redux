import { types } from "../components/reducers/types";

import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

//SweetAlert
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password)=>{
    return async(dispatch) =>{
        //loading en true
        dispatch(startLoading());
        try {
            const {user} =  await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(user.displayName);        
            dispatch(login(user.uid, user.displayName));
            //loanding en false
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            //por si el usuario escribio algo mal en su cuenta
            dispatch(finishLoading());
            Swal.fire("Error", error.message, "error")
        }

    }
}

//autenticacion con google
export const startGoogleLogin = ()=>{

    //funcions asincrona
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                //Login
                dispatch(login(user.uid, user.displayName))
            })
    }
}

//Registro con email y password
export const Register = (email, password, name)=>{

    return(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) =>{
                //agrega el nombre cuando solo es un registro con nombre email y password
                await user.updateProfile({displayName: name})
                console.log(user);

                dispatch(login(user.uid, user.displayName))
            })
            .catch(e =>{
                Swal.fire("Error", e.message, "error")
            });
    }
}

export const login = (uid, displayName)=> ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    
});



export const startLogout = ()=>{
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logOut())

    }
}

export const logOut = () =>{
    return{
        type: types.logout
    }
}