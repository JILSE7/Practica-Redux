//punto mas alto de la aplicacion despues del index para implementar

import React from 'react'
import { AppRouter } from './routers/AppRouter'

//importnacion del provider de reduc
import {Provider} from 'react-redux';
//importacion de nuestra fuente unica de informacion
import { store } from './components/store/store'

export const JournalApp = () => {
    return (
        <>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
        </>
        
    )
}
