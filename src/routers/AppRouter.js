import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
//components
import { JournalScreen } from '../components/journal/JournalScreen'
//router
import { AuthRouter } from './AuthRouter'
//firebase
import {firebase} from '../firebase/firebase-config' 
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { loadNotes } from '../helpers/loadNotes'
import { setNote, startLoadingNotes } from '../actions/notes'
import { startLoading } from '../actions/ui'





export const AppRouter = () => {
        const dispatch = useDispatch();

        const [checking, setchecking] = useState(true);
        const [isLoading, setisLoading] = useState(false)
        
    useEffect(() => {
            //Sabemos si estamos autenticados o no
            //este es un observable, que siempre estara atento cuando nos deslogueamos o cambiamos de cuenta
            //se ejecutara siempre y cuando cambiemos de cuentas
            firebase.auth().onAuthStateChanged(async(user) => {
                if(user?.uid){
                    dispatch(login(user.uid, user.displayName)) 
                    setisLoading(true);
                    dispatch(startLoadingNotes())
                    // const notes =  await loadNotes(user.uid);
                    // dispatch(setNote(notes));
                }else{
                    setisLoading(false);
                }

                setchecking(false);
            });
        
    }, [dispatch, setchecking, setisLoading])

    if(checking) return <h1>Espere</h1>


    return (
        <Router>
            <Switch>
                <PublicRoute IsAunthenticated={isLoading} path="/auth" component={AuthRouter}/>

                <PrivateRoute exact IsAunthenticated= {isLoading} path="/" component={JournalScreen}/>

                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    )
}
