import React from 'react'

import {Link} from 'react-router-dom';

export const LoginScreen = () => {

    return (
        <> 
            <h3>Iniciar Sesion</h3>

            <form  autoComplete="off"  list="autocompleteOff" >
                <label className="label-a mt-5">Email</label>
                <input type="text" placeholder="Ingresa tu Email" name="email" className="in-a" />

                <label  className=" l-b ">Contraseña</label>
                <input type="password" placeholder="Ingresa tu contraseña" name="password"/>

                <button disabled className="btn btn-primary mb-1" type="submit">Iniciar Sesion</button>
                <hr/>
            </form>
            <div className="auth__social">
                <p>Inicia sesion con redes sociales</p>
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Inicia con Google</b>
                    </p>
                </div>

                <Link className="link" to="/auth/register">Crea una nueva cuenta</Link>
            </div>

            
        </>
    )
}
