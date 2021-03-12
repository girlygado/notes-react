import NoteList from './NoteList'
import SearchInput from './SearchInput'

const NotesListPanel = ({ notes, handleNoteItemClick }) => {
    return (
        <div className="notes-list-panel">
            <SearchInput
                placeholder="Search notes ..." />

            { notes.length > 0
                ? <NoteList notes={notes} handleNoteItemClick={handleNoteItemClick} />
                : <div className="empty-list">seems that this is empty...</div>}
        </div>
    )
}

export default NotesListPanel