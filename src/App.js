import React, { useState, useContext, useEffect } from 'react'
import NotesMenuPanel from './components/NotesMenuPanel'
import NotesListPanel from './components/NotesListPanel'
import NotesContentPanel from './components/NotesContentPanel'

import { GlobalContext } from './context/GlobalContext'
import { setCategory } from './context/AppActions'

const App = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const { notes, currentCategory, isSearchActive, searchResults } = state

  const [noteResults, setNoteResults] = useState([])

  const [contentView, setContentView] = useState('info') 
  const [isContentPanelOpen, setContentPanelOpen] = useState(false) 

  const loadNoteCategory = category => {
    let noteRes = isSearchActive ? searchResults : notes
    let filteredNotes = [];
    
    if (category === 'all') {
      filteredNotes = noteRes.filter(note => note.isDeleted === 0);
    } else if (category === 'favorite') {
      filteredNotes = noteRes.filter(note => note.isFavorite === 1 && note.isDeleted === 0);
    } else if (category === 'trash') {
      filteredNotes = noteRes.filter(note => note.isDeleted === 1);
    }
    
    return filteredNotes;
  }

  const handleMenuClick = category => {
    setCategory(category)(dispatch)
    setNoteResults(loadNoteCategory(currentCategory))
  }

  const handleAddFormOpen = () => {
    setContentView('new')
    setContentPanelOpen(true)
  }

  const handleEditFormOpen = () => {
    setContentView('edit')
    setContentPanelOpen(true)
  }

  const handleNoteItemClick = () => {
    setContentView('info')
    setContentPanelOpen(true)
  }

  // Load initial data
  useEffect(() => {
    setNoteResults(loadNoteCategory(currentCategory))
    console.log('isContentPanelOpen ' + isContentPanelOpen)
  }, [state, currentCategory])

  return (
    <div className="main">
      {/* 
        Menu List Items
        Menu Burger
       */}
      <NotesMenuPanel 
        handleMenuClick={handleMenuClick}
        handleAddFormOpen={handleAddFormOpen} />

      {/* 
        Search input field
        Note list items
       */}
      <NotesListPanel 
        notes={noteResults}
        handleNoteItemClick={handleNoteItemClick}/>

      <NotesContentPanel
        contentView={contentView}
        isContentPanelOpen={isContentPanelOpen}
        onClosePanel={() => setContentPanelOpen(false)}
        returnToView={handleNoteItemClick}
        handleEditFormOpen={handleEditFormOpen}/>
    </div>
  )
}

export default App
