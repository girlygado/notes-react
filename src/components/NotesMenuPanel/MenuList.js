import { useState, useEffect } from 'react'
import MenuItem from './MenuItem'
import { Icon } from '@material-ui/core'

const MenuList = ({ isMenuOpen, onMenuClose, handleMenuClick, }) => {
    const [currentMenu, setCurrentMenu] = useState('all');
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'light') {
            setPageTheme('dark')
        } else {
            setPageTheme('light')
        }
    }

    const setPageTheme = themePref => {
        setTheme(themePref)
        document.documentElement.setAttribute('data-theme', themePref)
        localStorage.setItem('note-theme', themePref)
    }

    const menuList = [
        {
            id: 'all',
            title: 'All Notes',
            icon: 'event_note'
        },
        {
            id: 'favorite',
            title: 'Favorites',
            icon: 'favorite'
        },        
        {
            id: 'trash',
            title: 'Trash',
            icon: 'delete'
        },
    ];

    const handleMenuItemClick = menuID => {
        setCurrentMenu(menuID)
        onMenuClose()

        handleMenuClick(menuID)
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('note-theme');
        setPageTheme(currentTheme)
    }, [])

    return (
        <ul className={`menu-list ${isMenuOpen && 'open'}`}>
            {
                menuList.map(menu => (
                    <MenuItem
                        key={`menu_${menu.id}`}
                        title={menu.title}
                        icon={menu.icon}
                        menuID={menu.id}
                        currentMenu={currentMenu}
                        onClick={() => handleMenuItemClick(menu.id)}
                    />
                ))
            }

            <div className="theme-switcher-container">
                <button className='theme-switcher' onClick={() => switchTheme()}>
                    {theme === 'light' ? 'dark' : 'light'} mode <Icon className="theme-icon" color="inherit">brightness_4</Icon> 
                </button>
            </div>
        </ul>
    )
}

export default MenuList
