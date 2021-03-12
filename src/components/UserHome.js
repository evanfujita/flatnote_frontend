import React from 'react'
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer'
import NoteForm from './NoteForm'
import EditNoteForm from './EditNoteForm'

import { Grid } from 'semantic-ui-react'
import UserProfile from './UserProfile'

class UserHome extends React.Component {

    constructor(){
        super()
        this.state = {
            displayNote: 0,
            displayForm: false,
            displayUserInfo: false,
            displayEditForm: false
        }
    }

    resetForms = () => {
        this.setState({
            displayForm: false,
            displayUserInfo: false,
            displayEditForm: false
        })
    }
    
    handleClick = (id) => {
        this.setState({
            displayNote: id
        })
    }

    click = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    handleUsername = () => {
        this.setState({
            displayUserInfo: !this.state.displayUserInfo
        })
    }

    handleEdit = () => {
        this.setState({
            displayEditForm: !this.state.displayEditForm
        })
    }

    handleDelete = () => {
        const id = this.state.displayNote
        this.sendDelete(id)
    }

    sendDelete = (id) => {
        fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(a => {
            this.props.deleteNote(id)
            this.resetForms()
        })
    }

    render(){
        const showNote = this.props.notes.find(note => note.id === this.state.displayNote)
        
        return(
            <div>
            <header>
                <h2 onClick={this.handleUsername}>{this.props.username}</h2>
            </header><br/>
            <Grid columns='three' divided>
                <Grid.Column className='left-column'>
                    <p>Notes</p>
                    {this.props.notes.length < 1 ? 'No Notes!' : <NoteContainer handleClick={this.handleClick} />}
                </Grid.Column>
                <Grid.Column item className='middle-column'>
                    <div className='container'>
                        {showNote ? 
                        <div>
                            <p>{showNote.body}</p>
                            <button class='circular tiny ui button' onClick={this.handleEdit}>edit</button><br/><br/>
                            <button class='circular tiny ui button' onClick={this.handleDelete}>delete</button><br/><br/>
                        </div>
                        :
                        null
                        }
                        {
                            <p>{this.state.displayEditForm ? <EditNoteForm resetForms={this.resetForms} note={showNote} /> : null}</p>

                        }

                    </div>
                </Grid.Column>
                <Grid.Column item flex-direction='row-reverse' className='right-column'>
                    <button class='circular ui button' onClick={this.click}>add note</button><br/><br/>
                    {this.state.displayForm ? <NoteForm resetForms={this.resetForms} /> : null}<br/><br/>
                    {this.state.displayUserInfo ? <UserProfile /> : null }
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: id => dispatch({type: 'DELETE_NOTE', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)