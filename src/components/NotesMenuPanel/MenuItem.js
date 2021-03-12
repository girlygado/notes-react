import Icon from '@material-ui/core/Icon';

const MenuItem = ({icon, title, onClick, menuID, currentMenu}) => {
    return (
        <li className={`menu-list--item ${currentMenu === menuID && 'active'}`}
            onClick={onClick}>
            <Icon>{icon}</Icon>
            {title}
        </li>
    )
}

export default MenuItem
