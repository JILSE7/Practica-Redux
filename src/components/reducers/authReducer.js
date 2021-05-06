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
                name: action.payload.displayName,
                photo: action.payload.userPhoto,
            }
        
            case types.logout:
                return {}
    
        default:
            return state;
    }
}