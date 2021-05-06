//1.- importancion de createstore y combineReducers
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

//redux devtoool para trabajar petiiones asincronas
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//2.-combine reducers permite hacer nuestro conjunto de reducers,
//ya que create store solo puede recibir un argumento y para mandar mas
//de un reducer se utiliza combinereducer
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})

//3.- creando la store o fuente unica de informacion
export const store = createStore(
    reducers,  
    //trabajr peticiones asincronas
   composeEnhancers(
    applyMiddleware(thunk)
   )
);

  