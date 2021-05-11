import React from 'react'
import { connect } from 'react-redux'


class TaskForm extends React.Component {
    state = {
        user_id: this.props.user.id
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){

        return(
            <form class='form' onSubmit={this.handleSubmit}>
                <input class='form-field' type='text' name='title' placeholder='title' onChange={this.handleChange} /><br/>
                <input class='form-field' type='text' name='body' placeholder='content' onChange={this.handleChange} /><br/><br/>
                <input type='submit' value='create task' />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TaskForm)