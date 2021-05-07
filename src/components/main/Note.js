import React from 'react'

const Note = props => {
    const { title, body } = props.noteInfo
    return (
        <div>
            {title}            
        </div>
    )
}

export default Note