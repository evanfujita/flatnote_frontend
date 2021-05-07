import React from 'react'

const Note = props => {
    const { note } = props
    return (
        <div>
            {note.body}
        </div>
    )
}

export default Note