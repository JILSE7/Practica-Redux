import { types } from "./types";
/** 
    {
        uid: jhfdjhdfjdfj
        name: 'Said'
    }
 */




export const authReducer =  (state = {},action) =>{

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.diplayName
            }
        
            case types.logout:
                return {}
    
        default:
            return state;
    }
}