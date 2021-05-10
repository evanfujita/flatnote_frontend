import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../actions/index'
import { deleteFetch } from '../../helpers/fetch'

const Controls = props => {
    const dispatch = useDispatch()
    const { item, resource } = props

    const handleDelete = event => {
        deleteFetch(resource)
        dispatch(remove(item))
    }

    const handleEdit = event => {
        
    }

    return (
        <span class='controls'>
            <li class='navbar-item' onClick={handleEdit}>edit</li>
            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
        </span>
    )
}

export default Controls