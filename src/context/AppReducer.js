// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    let notes = []

    switch (action.type) {
        case 'SELECT_CURRENT_CATEGORY': 
            return {
                ...state,
                currentCategory: action.payload
            }

        case 'SELECT_CURRENT_NOTE': 
            return {
                ...state,
                currentNote: state.notes.filter(note => note.id === action.payload)[0]
            }

        case 'TOGGLE_FAVORITE':
            notes = [...state.notes].map(note => {
                if (note.id === action.payload) {
                    note.isFavorite = note.isFavorite ? 0 : 1
                    return note
                }

                return note
            })

            return {
                ...state,
                notes,
                currentNote: notes.filter(note => note.id === action.payload)[0]
            }

        case 'ADD_NOTE':
            const newNote = {
                id: 'n' + Math.round(Math.random(0,1) * 100),
                title: action.payload.title,
                content: action.payload.content,
                isFavorite: 0,
                isDeleted: 0,
            }

            return {
                ...state,
                notes: [newNote, ...state.notes],
                currentNote: newNote
            }

        case 'EDIT_NOTE':
            notes = [...state.notes].map(note => {
                if (note.id === action.payload.id) {
                    note.title = action.payload.title
                    note.content = action.payload.content
                    return note
                }

                return note
            })

            return {
                ...state,
                notes,
                currentNote: notes.filter(note => note.id === action.payload.id)[0]
            }

        case 'DELETE_NOTE':
            let currNote = state.notes.filter(note => note.id === action.payload)[0]
            let category = state.currentCategory

            notes = state.notes
            if (currNote.isDeleted === 0) {
                // set status to deleted
                notes = [...state.notes].map(note => {
                    if (note.id === action.payload) {
                        note.isDeleted = 1
                        return note
                    } else {
                        return note
                    }
                })
            } else {
                // permanent delete
                notes = [...state.notes].filter(note => note.id !== currNote.id)
            }

            let activeNotes = []
            if (category === 'all') {
                activeNotes = notes.filter(note => note.isDeleted === 0);
            } else if (category === 'favorite') {
                activeNotes = notes.filter(note => note.isFavorite === 1 && note.isDeleted === 0);
            } else if (category === 'trash') {
                activeNotes = notes.filter(note => note.isDeleted === 1);
            }

            return {
                ...state,
                notes,
                currentNote: activeNotes.length > 0 ? activeNotes[0] : {}
            }

        case 'SEARCH_NOTES':
            return {
                ...state,
                isSearchActive: action.payload.length > 0 ? true : false,
                searchResults: [...state.notes].filter(note => (
                    note.title.toLowerCase().includes(action.payload) ||
                    note.content.toLowerCase().includes(action.payload) ||
                    note.tag.toLowerCase().includes(action.payload)
                    ))
            }

        default:
            return state;
    }
}