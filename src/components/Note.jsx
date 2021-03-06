import React from 'react';
import './../styles/Note.css';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    
    const deleteNote = () => {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}><DeleteIcon /></button>
        </div>
    );
}

export default Note;