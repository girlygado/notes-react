import { useContext } from 'react'
import { Icon } from '@material-ui/core'
import { GlobalContext } from '../../context/GlobalContext'
import { deleteNote, toggleFavorite } from '../../context/AppActions'

const ViewForm = ({ note, onClosePanel, handleEditFormOpen}) => {
    const { dispatch } = useContext(GlobalContext)

    const onDelete = id => {
        deleteNote(id)(dispatch)
        onClosePanel()
    }

    const onToggleFavorite = id => {
        toggleFavorite(id)(dispatch)
    }

    return (
        <div className="note-content-view">
            <div className="note-content-header">
                <div className="note-content-info">
                    <div className="note-content--title">{note.title}</div>
                    <div className="note-content--date">{note.timestamp}</div>
                </div>
                <div className="note-content-actions">
                    <button className="btn btn-circle icon-btn" onClick={handleEditFormOpen}>
                        <Icon>mode_edit</Icon>
                    </button>

                    <button className="btn btn-circle icon-btn" onClick={() => onDelete(note.id)}>
                        <Icon>delete_outline</Icon>
                    </button>

                    <button className={`btn btn-circle icon-btn ${note.isFavorite ? 'col-accent' : ''}`}
                        onClick={() => onToggleFavorite(note.id)}>
                        <Icon>{note.isFavorite ? 'favorite' : 'favorite_border'}</Icon>
                    </button>

                    <button className="btn btn-circle icon-btn close-content-panel" onClick={onClosePanel}>
                        <Icon>close</Icon>
                    </button>
                </div>
            </div>

            <div className="overflow-container note-content--text">
                {note.content.replace(/\u21B5/g,'<br/>')}
            </div>
        </div>
    )
}

export default ViewForm
