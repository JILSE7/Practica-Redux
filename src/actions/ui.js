import { types } from "../components/reducers/types"


export const SetErrorAction = (err)=>{
    return {
        type: types.uiSetError,
        payload: err
    }
}



export const removerErrorAction = ()=>{

    return {
        type: types.uiRemoveError,
    }
}


export const startLoading = ()=>{
    return{
        type: types.uiStartLoading
    }
}

export const finishLoading = ()=>{
    return{type: types.uiFinishLoading}
}