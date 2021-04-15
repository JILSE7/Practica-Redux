import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-1">
                <i class="fas fa-anchor"></i>
                    <span> Said...!!</span>
                </h3>

                <button className="btn mt-1"> Logout</button>
            </div>

            <div className="journal__new-entry">
                <i class="far fa-calendar-plus fa-5x"></i>
                <p>New Entry</p>

            </div>

            <JournalEntries/>
        </aside>
    )
}
