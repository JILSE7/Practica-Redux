import React from 'react'

import {Link} from'react-router-dom'
    
//utilizar nuestro custom hook
import {useForm} from '../../hooks/useForm';

//utilizando el paquete validator para email
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removerErrorAction, SetErrorAction } from '../../actions/ui';
import { Register } from '../../actions/auth';



export const RegisterScreen = () => {

    //useSelector
    const state = useSelector(state => state)
    const {msError} = state?.ui;
    console.log(msError);
    
    //dispatch
    const dispatch = useDispatch();

    //1 definicion del objeto
    const [formValues, handleInputChange] = useForm({
        nombre: 'said',
        email: 'said54@gmail.com',
        password: '123456',
        confirm: '123456'
    })

    //2 extraccion de las variables
    const {nombre, email, password, confirm} = formValues
    
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(isFormValid()){
            dispatch(Register(email, password, nombre))
        }

    }


    const isFormValid = ()=>{
        
        if(nombre.trim().length === 0){
            console.log('nombre es requerido');
            dispatch(SetErrorAction('Nombre is required'))
            return false
        }else if(!validator.isEmail(email)){
            console.log(' este no es un email');
            dispatch(SetErrorAction('Is not a Email'))
            return false;
        }else if( password !== confirm ){
            console.log('Contraseña incorrecta, favor de verificar');
            dispatch(SetErrorAction('Password incorrect'))
            return false;
        }else if( password.length < 5 || confirm.length < 5){
            console.log('Contraseña debe ser mas segura');
            dispatch(SetErrorAction('Contraseña debe ser mas segura'))
            return false;
        }


        //si no hubo errores
        dispatch(removerErrorAction());
        return true;
    }

    return (
        <> 
        <h3>Registrate</h3>

        <form  autoComplete="off"  list="autocompleteOff" onSubmit={handleSubmit} >
            
            {msError && <div className="auth__alert-error">{msError}</div> }

            <label className="label-a ">Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" name="nombre" value={nombre} className="in-a" onChange={handleInputChange} />

            <label className="label-a ">Email</label>
            <input type="text" placeholder="Ingresa tu Email" name="email" value={email} className="in-a" onChange={handleInputChange}  />

            <label  className=" l-b ">Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" name="password" value={password} onChange={handleInputChange} />

            <label  className=" l-b ">Confirmar</label>
            <input type="password" placeholder="Confirmar tu contraseña" name="confirm" value={confirm} onChange={handleInputChange} />

            <button  className="btn btn-primary mb-1" type="submit">Registrar</button>
            <hr/>
        </form>
       

            <Link className="link hola" to="/auth/login">Ya estas Registrado?</Link>
        

        
    </>
    )
}
