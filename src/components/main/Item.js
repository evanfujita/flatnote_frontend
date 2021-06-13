import React from 'react'

const Item = props => {
    
    //destructured props
    const { item } = props

    return (
        <div class='container'>
            {item.body}
        </div>
    )
}

export default Item