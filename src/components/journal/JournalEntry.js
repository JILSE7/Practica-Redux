import React from 'react'

export const JournalEntry = () => {


    return (
        <div className="journal-entry">
            <div className="journal__entry-picture" 
                 style={{
                     backgroundSize: 'Cover',
                     backgroundImage: `url(https://picsum.photos/200/300?random=${Math.floor(Math.random()* 50)})`,
                     backgroundPosition: 'center'
                 }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                 Un nuevo dia
                </p>

                <p className="journal__entry-content">
                    Officia aliquip ut et consequat Lorem est ullamco occaecat pariatur non sunt tempor minim.
                </p>
            </div>

            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>25</h4>
            </div>
        </div>
    )
}
