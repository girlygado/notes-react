 const EmptyPage = () => {
    return (
        <div className="note-content-view ">
            <div className="note-content-header"></div>
                <div className="overflow-container flex-content-center">

                <img className="empty-notes-img" src="/img/notes_empty.png" alt="empty" />
                <div className="empty-notes-text">
                    <p className="empty-notes-text--title">Hi there!</p>
                    <p className="empty-notes-text--content">
                        It seems that this space is empty. 
                        Try adding a new note, or click something from the list.</p>
                </div>
            </div>
            
        </div>
    )
}

export default EmptyPage 