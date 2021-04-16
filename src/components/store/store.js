//1.- importancion de createstore y combineReducers
import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';


//2.-combine reducers permite hacer nuestro conjunto de reducers,
//ya que create store solo puede recibir un argumento y para mandar mas
//de un reducer se utiliza combinereducer
const reducers = combineReducers({
    auth: authReducer
})

//3.- creando la store o fuente unica de informacion
export const store = createStore(reducers);

 