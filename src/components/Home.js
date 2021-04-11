import React from 'react'
import { connect } from 'react-redux'
import UserHome from './UserHome'

class Welcome extends React.Component {

    displayUser = () => {
         return this.props.signedIn ? <UserHome /> : null
    }

    render(){
        return(
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signedIn: state.signedIn
    }
}

export default connect(mapStateToProps)(Welcome)