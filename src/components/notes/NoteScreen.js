import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar/>

            <div className="notes__content"> 
                <input type="text" className="notes_title-input" placeholder="Algun asombroso titulo"/>
                <textarea placeholder="What happend today" className="notes_textarea"/>

                <div className="notes__image">
                    <img src="https://picsum.photos/200/300?random=${5})"/>

                </div>

            </div>
            
        </div>
    )
}
