import React from 'react'

class NoteForm extends React.Component{
    render(){
        return(
            <form>
                <input type='text' placeholder='title' /><br/>
                <textarea rows='3' id='textarea' name='textarea' type='textarea' placeholder='body' /><br/>
                <input type='submit' />
            </form>
        )
    }
}

export default NoteForm