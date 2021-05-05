import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    //dispatch para las acciones
    const dispatch = useDispatch();

    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(startLogout());
        
    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-1">
                <i className="fas fa-anchor"></i>
                    <span> Said...!!</span>
                </h3>

                <button onClick={handleLogout} className="btn mt-1"> Logout</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New Entry</p>

            </div>

            <JournalEntries/>
        </aside>
    )
}
