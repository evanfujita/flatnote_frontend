import React from 'react'
import { connect } from 'react-redux'
import { Reducers } from '../reducers/Reducers'

class NoteForm extends React.Component {

    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addNote(this.state)
        // this.setState({
        //     title: '',
        //     body: ''
        // })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label value='Title' />
                    <input onChange={this.handleChange} type='text' name='title' value={this.state.title} placeholder='title' /><br/>
                    <input onChange={this.handleChange} type='text' name='body' value={this.state.body} placeholder='body' /><br/>
                    <input type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: newNote => dispatch({
            type: 'ADD_NOTE',
            note: newNote
        })
    }
}

export default connect(null, mapDispatchToProps)(NoteForm)