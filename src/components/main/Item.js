import React from 'react'

const Item = props => {
    const { item, type } = props

    return (
        <div class='container'>
            {type === 'task' ? 'Task:' : null}
            {type === 'note' ? 'Note:' : null}
            <br />
            {item.body}
        </div>
    )
}

export default Item