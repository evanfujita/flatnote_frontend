import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import UserHome from './UserHome'

class Welcome extends React.Component {

    handleClick = (event) => {
        console.log(event.target.className)
    }

    displayUser = () => {
         return this.props.signedIn ? <UserHome /> : null        
    }

    render(){
        return(
            <div>
                <h3>Welcome!</h3>
                {this.displayUser}
                <NavLink to='/login'>Login</NavLink><br/>
                <NavLink to='/register'>Register</NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signedIn: [state.signedIn]
    }
}

export default connect(mapStateToProps)(Welcome)