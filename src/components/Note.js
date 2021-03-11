import React from 'react'

class Note extends React.Component {

    render(){

        const { id, title } = this.props.noteInfo

        return(
            <div className='note'>
                <h2 onClick={()=> this.props.handleClick(id)}>{title}</h2>
                {/* <p>{this.props.noteInfo.body}</p> */}
            </div>
        )
    }
}

export default Note