import React, { useContext } from 'react'
import Note from './Note'

import { GlobalContext } from '../../context/GlobalContext'
import { setCurrentNote } from '../../context/AppActions'

const NoteList = ({ notes, handleNoteItemClick }) => {
    const {state, dispatch} = useContext(GlobalContext)
    
    const currentNote = state.currentNote

    const onClick = (id) => {
        handleNoteItemClick()
        setCurrentNote(id)(dispatch)
    }

    return (
        <div className="notes-container overflow-container">
            { notes.map((note, index) => (
                <Note
                    key={index}
                    note={note}
                    activeNoteID={currentNote.id}
                    onClick={() => onClick(note.id)} />
            ))}
        </div>
    )
}

export default NoteList
