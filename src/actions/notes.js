import { types } from "../components/reducers/types";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";

import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNotes = ()=>{
    return async (dispatch, getState)=>{
        //Como segundo argumento existe una funcion que obtiene el estado
        //el nombre es indiferente
        // const {auth: {uid}} = getState();
        const {uid} = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote))
        
        dispatch(addNewNote(doc.id,newNote));
    }
}



export const activeNote = (id, note)=>{
    return{
        type: types.notesActive,
        payload:{
            id,
            ...note
        }
    }
}

export const addNewNote = (id, note)=>{
    return{
        type: types.notesAddNew,
        payload: {
            id,
            ...note
        }
    }    
}

export const startLoadingNotes = () =>{
    return async(dispatch, getState) =>{
        const {uid} = getState().auth;

        const notes = await loadNotes(uid)

        dispatch(setNote(notes))
   
    }
}

export const setNote = (notes) =>{
    return{
        type: types.notesLoad,
        payload: notes
    }
}

export const saveNote = (note) =>{
  
    return async(dispatch, getState) =>{
        const {uid} = getState().auth;

        if(!note.url){
            delete note.url
        }
        const noteFirestore = {...note};
        delete noteFirestore.id;

       await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFirestore);

       dispatch(refreshNote(note.id, noteFirestore));

       Swal.fire("Saved", note.title, 'success')

    }
}


export const refreshNote = (id, note)=>{
    return{
        type: types.notesUpdate,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}


export const startUploading = (file)=>{
    return async(dispatch, getState) =>{

        const {active: activeNote} = getState().notes;
        
        Swal.fire({
            title: 'Uploading',
            text: 'Please wait....',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch( saveNote(activeNote))

        Swal.close();

    }

}


export const startDeleting = (id)=>{
    return async(dispatch, getState) =>{
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id))
      
    }
}


export const deleteNote = (id) =>{

    return{
        type: types.notesDelete,
        payload: id
    }

}


export const noteLogout = ()=>{
    return{
        type: types.notesLogoutCleaning,
        payload: null,
    }

}