import React from 'react'
import { connect } from 'react-redux'


class UserProfile extends React.Component {
    
    constructor(){
        super()
        this.state = {
            editUser: false
        }
    }

    handleEdit = () => {
        this.setState({
            editUser: !this.state.editUser
        })
    }
    
    handleDelete = () => {
        fetch(`http://localhost:3000/users/${this.props.userId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(a => {
            debugger
            this.props.history.push('/login')
        })
    }

    render(){

        const form = (
            <form class='ui form'>
                <input class='field' type='text' placeholder={this.props.username}/>
                <input class='circular ui submit button' type='submit' />
            </form>
        )

        const displayForm = this.state.editUser ? form : <p>{this.props.username}</p>

        return(
            <div>        
                <p>User Information</p>
                <div class='ui vertical buttons'>
                    <button class="circular ui icon button" onClick={this.handleEdit}>Edit</button>
                    <button class="red circular ui icon button" onClick={this.handleDelete}>Delete</button>
                </div><br/><br/>
                {displayForm}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        username: newUsername => dispatch({type: 'CHANGE_USERNAME', username: newUsername})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)