import React from 'react'
import { connect } from 'react-redux'

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
        const note = {...this.state, user_id: this.props.userId}
        this.setState({
            title: '',
            body: '',

        })

        this.handleNote(note)
    }

    handleNote = note => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }

        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.addNote(note)
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


const mapStateToProps = state => {
    return {
        userId: state.userId
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)