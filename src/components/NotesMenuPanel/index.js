import React, { useState } from 'react'
import MenuHeader from './MenuHeader.js'
import MenuList from './MenuList.js'
import MenuFooter from './MenuFooter.js'

const NotesMenuPanel = ({ handleMenuClick, handleAddFormOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)   

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="notes-menu-panel">
            <MenuHeader
                isMenuOpen={isMenuOpen}
                onMenuClick={toggleMenuOpen} />
            <MenuList
                isMenuOpen={isMenuOpen}
                onMenuClose={handleMenuClose} 
                handleMenuClick={handleMenuClick} />
            <MenuFooter
                handleAddFormOpen={handleAddFormOpen} />
        </div>
    )
}

export default NotesMenuPanel
