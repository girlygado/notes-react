
import React, { useState, useContext} from 'react'

import { GlobalContext } from '../../context/GlobalContext'
import { setSearchKeyword } from '../../context/AppActions'

const SearchInput = () => {
    const { dispatch } = useContext(GlobalContext)
    
    const [value, setValue] = useState('')

    const onInput = (e) => {
        const query = e.target.value
        const trimKeyword = query.toLowerCase().trim()
        
        setValue(query)
        setSearchKeyword(trimKeyword)(dispatch)
    }

    return (
        <div className="search-container">
            <input type="text"
                className="search-input-field"
                placeholder='search notes...'
                value={value}
                onChange={onInput} />
        </div>
    )
}

export default SearchInput
