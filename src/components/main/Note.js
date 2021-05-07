import React from 'react'

const Note = props => {
    const { note } = props
    return (
        <div class='container'>
            {note.body}
        </div>
    )
}

export default Note