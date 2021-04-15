import React from 'react'

import {Link} from'react-router-dom'

export const RegisterScreen = () => {
    return (
        <> 
        <h3>Registrate</h3>

        <form  autoComplete="off"  list="autocompleteOff" >
            <label className="label-a ">Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" name="nombre" className="in-a" />

            <label className="label-a ">Email</label>
            <input type="text" placeholder="Ingresa tu Email" name="email" className="in-a" />

            <label  className=" l-b ">Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" name="password"/>

            <label  className=" l-b ">Confirmar</label>
            <input type="password" placeholder="Confirmar tu contraseña" name="confirm"/>

            <button  className="btn btn-primary mb-1" type="submit">Registrar</button>
            <hr/>
        </form>
       

            <Link className="link hola" to="/auth/login">Ya estas Registrado?</Link>
        

        
    </>
    )
}
