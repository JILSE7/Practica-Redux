import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote, startUploading } from '../../actions/notes';
import moment from 'moment'

export const NotesAppBar = () => {
    const dispatch = useDispatch();

    const {active} = useSelector(state => state.notes);

    const noteDate = moment(active.date);
    
    const handleSave = ()=>{
      
        dispatch(saveNote(active))
        // console.log(active);
    }

    const handlePicture = ()=>{
        //simulando el click en nuestro input que no se ve
        document.querySelector("#file").click();
    }

    const handleFileChange = (e)=>{
        const file =  e.target.files[0];
        // const file =  e.target.value;
        // console.log(file);
        if(file){
            dispatch(startUploading(file))
        }else{
            console.log('no hay nada seleccionado');
        }
    }


    return (
        <div className="notes__appbar">
            <span>{noteDate.format()}</span>
            
            <input
            id="file"
            type="file"
            style = {{display: "none"}}
            onChange={handleFileChange}
            />
            <div>
                <button className="btn" onClick={handlePicture}>Picture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>

        </div>
    )
}
