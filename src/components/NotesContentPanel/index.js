import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import ViewForm from './ViewForm'
import AddForm from './AddForm'
import EditForm from './EditForm'
import EmptyPage from './EmptyPage'

const NotesContentPanel = ({ contentView, isContentPanelOpen, onClosePanel, returnToView, handleEditFormOpen}) => {
    const { state } = useContext(GlobalContext)
    const currentNote = state.currentNote

    let returnedView = '';
    if (contentView === 'new') {
        returnedView =
            <AddForm
                onClosePanel={onClosePanel}
                exitForm={returnToView} />

    } else if (contentView === 'edit') {
        returnedView =
            <EditForm
                note={currentNote}
                onClosePanel={onClosePanel}
                exitForm={returnToView} />

    } else if (contentView === 'info') {
        if (Object.keys(currentNote).length === 0) {
            returnedView = <EmptyPage />
        } else {
            returnedView =
                <ViewForm
                    note={currentNote}
                    onClosePanel={onClosePanel}
                    handleEditFormOpen={handleEditFormOpen} />
        }
    }

    return (
        <div className={`notes-content-panel ${isContentPanelOpen ? 'open' : ''} `}>
            {returnedView}
        </div>
    )
}

export default NotesContentPanel
