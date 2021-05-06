import React from 'react'
//MomentJS
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, body, title, url}) => {
    //Moment
    const noteDate = moment(date);
    //Dispatch
    const dispatch = useDispatch();
    
    const handleClick = () =>{
        dispatch(activeNote(id,{date, body, title, url}))
    }
    return (
        <div className="journal-entry animate__animated animate__fadeIn" onClick={handleClick}>
           { url && <div className="journal__entry-picture" 
                 style={{
                     backgroundSize: 'Cover',
                     backgroundImage: `url(${url})`,
                     backgroundPosition: 'center'
                 }}
            ></div>}

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                 {title}
                </p>

                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date">
                {/** FORMATO DE MOMENTJS */}
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
