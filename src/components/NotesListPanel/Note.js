import React from 'react'

const Note = ({ note, activeNoteID, onClick }) => {
    return (
        <div className={`notes-item ${activeNoteID == note.id ? 'active' : ''}`}
            onClick={() => onClick(note.id)}>
            <div className="notes-item--title">
                {note.title}
            </div>
            <div className="notes-item--content">
                {note.content}
            </div>
            <div className="notes-item--tag">
                {note.tag}
            </div>
        </div>
    )
}

export default Note
