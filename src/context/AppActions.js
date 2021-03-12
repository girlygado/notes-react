export const setCurrentNote = (id) => (dispatch) => {
    dispatch({
        type: 'SELECT_CURRENT_NOTE',
        payload: id
    })    
}

export const toggleFavorite = id => (dispatch) => {
    dispatch({
        type: 'TOGGLE_FAVORITE',
        payload: id
    })
}

export const addNote = (note) => (dispatch) => {
    dispatch({
        type: 'ADD_NOTE',
        payload: note
    })    
}

export const editNote = (note) => (dispatch) => {
    dispatch({
        type: 'EDIT_NOTE',
        payload: note
    })    
}

export const deleteNote = (id) => (dispatch) => {
    dispatch({
        type: 'DELETE_NOTE',
        payload: id
    })    
}

export const setCategory = (category) => (dispatch) => {
    dispatch({
        type: 'SELECT_CURRENT_CATEGORY',
        payload: category
    })    
}

export const setSearchKeyword = (query) => (dispatch) => {
    dispatch({
        type: 'SEARCH_NOTES',
        payload: query
    })
}