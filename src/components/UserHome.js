import React from 'react'
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer'
import NoteForm from './NoteForm'
import Grid from '@material-ui/core/Grid'

class UserHome extends React.Component {

    constructor(){
        super()
        this.state = {
            displayNote: 0,
            displayForm: false,
            displayUserInfo: false
        }
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



    render(){
        const showNote = this.props.notes.find(note => note.id === this.state.displayNote)
        const displayNote = showNote ? <p>{showNote.body}</p> : <p>nothin</p>
        
        return(
            <div>
            <header>
                <h2 onClick={this.handleUsername}>{this.props.username}</h2>
            </header>
            <Grid container>
                <Grid item className='left-column'>
                    {this.props.notes.length < 1 ? 'No Notes!' : <NoteContainer handleClick={this.handleClick} />}
                </Grid>
                <Grid item className='middle-column'>
                    <div className='container'>
                        {displayNote}
                    </div>
                </Grid>
                <Grid item className='right-column'>
                    <button onClick={this.click}>add note</button><br/>
                    {this.state.displayForm ? <NoteForm /> : 'do it'}<br/><br/>
                    {this.state.displayUserInfo ? 'CHANGE' : null }
                </Grid>
                {/* user information container */}
                {/* user notes container */}
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

export default connect(mapStateToProps)(UserHome)