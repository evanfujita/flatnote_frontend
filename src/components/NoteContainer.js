import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

class NoteContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            filter: 'none'
        }
    }

    handleSort = (event) => {
        this.setState({
            filter: event.target.id
        })
    } 

    render(){

        return(
            <div className='noteContainer'>
                <div class='dropdown'>
                    <button class='dropbtn'>Sort By:</button>
                    <div class='dropdown-content'>
                    <p>placeholder</p>
                    </div>
                </div>
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