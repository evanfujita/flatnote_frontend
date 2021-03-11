import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

class NoteContainer extends React.Component {
    render(){
        return(
            <div className='noteContainer'>
                {this.props.notes.map(note => 
                <Note 
                    key={note.id}
                    noteInfo={note} 
                    handleClick={this.props.handleClick}
                    />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteContainer)