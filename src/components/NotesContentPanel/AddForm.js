import { Icon } from '@material-ui/core'
import { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'

import { GlobalContext } from '../../context/GlobalContext'
import { addNote } from '../../context/AppActions'

const AddForm = ({ onClosePanel, exitForm }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const {  dispatch } = useContext(GlobalContext)

    const onTextareaFocus =  () => {
        document.querySelector('#contentField').focus();
    }

    const onSaveNote = () => {        
        const trimedTitle = title.trim()
        const trimedContent = content.trim();
        const noteContent = {
            title: trimedTitle,
            content: trimedContent
        }

        if (trimedTitle || trimedContent) {
            addNote(noteContent)(dispatch)
            exitForm()
        }
    }

    return (
        <div className="note-content-view">
            <div className="note-content-header">
                <div className="note-content-info">
                    <div className="note-content--title">
                        <TextField 
                            label="Note title" 
                            value={title} 
                            placeholder="Note title..."
                            fullWidth={true}
                            onChange={(e) => setTitle(e.target.value)}
                            color="secondary"
                            InputProps={{
                                className: "note-form--title",
                            }} />
                    </div>
                </div>
                <div className="note-content-actions">
                    <button className="btn btn-circle icon-btn" onClick={onSaveNote}>
                        <Icon>save</Icon>
                    </button>

                    <button className="btn btn-circle icon-btn add-form--close-content-panel" onClick={exitForm}>
                        <Icon>close</Icon>
                    </button>
                </div>
            </div>

            <div className="overflow-container note-content--text" onClick={onTextareaFocus}>
                <TextField
                    id="contentField"
                    label="Note title" 
                    value={content} 
                    placeholder="Note title..."
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth={true}
                    multiline={true}
                    color="secondary"
                    InputProps={{
                        className: "note-form--content",
                    }} />
            </div>
        </div>
    )
}

export default AddForm
