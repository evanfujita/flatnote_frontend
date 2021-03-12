import React from 'react'
import { connect } from 'react-redux'
import { Reducers } from '../reducers/Reducers'

class NoteForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: props.note.title,
            body: props.note.body,
            id: props.note.id
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const note = {title: this.state.title, body: this.state.body}
        this.setState({
            title: '',
            body: '',
        })

        this.handleNote(note)
    }

    handleNote = note => {
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }

        fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.editNote(note)
            this.props.resetForms()
        })
    }

    render(){
        return(
            <div>
                <form class='ui form' onSubmit={this.handleSubmit}>
                    <div class='fields'>
                        <div class='field'>
                            <input onChange={this.handleChange} type='text' name='title' value={this.state.title} placeholder='title' /><br/><br/>
                        </div>
                        <div class='field'>
                            <input onChange={this.handleChange} type='text' name='body' value={this.state.body} placeholder='body' /><br/><br/>
                        </div>
                        <input class='ui submit button' type='submit' name='submit' />
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        editNote: editedNote => dispatch({
            type: 'EDIT_NOTE',
            note: editedNote
        })
    }
}

export default connect(null, mapDispatchToProps)(NoteForm)