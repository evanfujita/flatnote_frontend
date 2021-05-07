import React from 'react'
import { connect } from 'react-redux'
import { createReqObj, postFetch } from '../../helpers/fetch'

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
        postFetch('notes', reqObj)
        event.target.reset()
    }

    render(){
    
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='title' placeholder='title' onChange={this.handleChange} /><br/>
                <textarea rows='3' type='textarea' id='textarea' name='body' placeholder='content' onChange={this.handleChange} /><br/>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)