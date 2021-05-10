import React from 'react'
import { connect } from 'react-redux'
import { createReqObj, postFetch } from '../../helpers/fetch'
import { add, addNoteForm } from '../../actions/index'

class NoteForm extends React.Component{
    state = {
        user_id: this.props.user.id
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const reqObj = createReqObj('POST', this.state)
        postFetch('notes', reqObj, this.props.add)
        this.props.addNoteForm()
        event.target.reset()
    }

    render(){
    
        return(
            <form class='form' onSubmit={this.handleSubmit}>
                <input class='form-field' type='text' name='title' placeholder='title' onChange={this.handleChange} /><br/>
                <textarea class='form-field' rows='3' type='textarea' id='textarea' name='body' placeholder='content' onChange={this.handleChange} /><br/>
                <input type='submit' />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    add,
    addNoteForm
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)