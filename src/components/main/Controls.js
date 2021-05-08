import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../actions/index'

const Controls = props => {
    const dispatch = useDispatch()
    const { item } = props

    return (
        <span class='controls'>
            <li class='navbar-item' >edit</li>
            <span class='red'>
                <li class='navbar-item' onClick={()=> dispatch(remove(item))}>delete</li>
            </span>
        </span>
    )
}

export default Controls