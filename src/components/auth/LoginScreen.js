import React from 'react';

import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import {useDispatch, useSelector} from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    //useSelector
    const {loading} = useSelector(state => state.ui);

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })


    const {email, password} = formValues

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log('me has dado click');
       dispatch(startLoginEmailPassword(email,password))
  
    }
    

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
        
    }
    return (
        <div className="animate__animated animate__fadeIn"> 
            <h3>Iniciar Sesion</h3>

            <form  onSubmit={handleLogin}  autoComplete="off"  list="autocompleteOff" >
                <label className="label-a mt-5">Email</label>
                <input type="text" placeholder="Ingresa tu Email" name="email" value={email} onChange={handleInputChange} className="in-a" />

                <label  className=" l-b ">Contraseña</label>
                <input type="password" placeholder="Ingresa tu contraseña" value={password} name="password" onChange={handleInputChange}/>

                <button disabled={loading}  className="btn btn-primary mb-1" type="submit">Iniciar Sesion</button>
                <hr/>
            </form>
            <div className="auth__social">
                <p>Inicia sesion con redes sociales</p>
                <div className="google-btn" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Inicia con Google</b>
                    </p>
                </div>

                <Link className="link" to="/auth/register">Crea una nueva cuenta</Link>
            </div>

            
        </div>
    )
}
