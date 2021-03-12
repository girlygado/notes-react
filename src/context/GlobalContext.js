import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialNoteList = [
    {
        id: 'n1',
        title: 'Movies to watch',
        content: 'Avengers',
        tag: 'all',
        isFavorite: 0,
        isDeleted: 0,
    },
    {
        id: 'n2',
        title: 'Dues on monday',
        content: 'bill electric bill',
        tag: 'favorite',
        isFavorite: 1,
        isDeleted: 0,
    },
    {
        id: 'n3',
        title: 'declutter',
        content: 'declutter shoes',
        tag: 'favorite',
        isFavorite: 1,
        isDeleted: 0,
    },
    {
        id: 'n4',
        title: 'grocery list',
        content: 'beef and other studd',
        tag: 'deleted',
        isFavorite: 1,
        isDeleted: 1,
    },
]

// initial state
const initialState = {
    notes: initialNoteList.filter(note => note.isDeleted === 0),
    currentNote: initialNoteList.filter(note => note.isDeleted === 0)[0],
    isSearchActive: false,
    searchResults: [],
    currentCategory: 'all'
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)    

    return (
        <GlobalContext.Provider value={{ 
            state,
            dispatch
         }}>
            {children}
        </GlobalContext.Provider>
    )
}