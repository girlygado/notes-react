import React from 'react'

const MenuHeader = ({ onMenuClick, isMenuOpen }) => {
    return (
        <div className="logo-container">
            <div className="logo-container--img"></div>
            
            <div  className="menu-btn-container" onClick={onMenuClick}>
                <div className={`menu-btn ${isMenuOpen && 'open'}`}>
                    <div className="menu-btn__burger"></div>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader
