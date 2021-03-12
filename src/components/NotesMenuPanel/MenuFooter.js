import { Icon } from '@material-ui/core'

const MenuFooter = ({ handleAddFormOpen }) => {
    return (
        <div className="notes-menu-add-container">
            <button
                className="btn-corner-rounded icon-btn btn-add-note"
                onClick={handleAddFormOpen}>
                <Icon>add</Icon>
                    Add New Note
                </button>
        </div>
    )
}

export default MenuFooter
