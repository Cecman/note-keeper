import React, { useState } from 'react';


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = evt => {

        const { name, value } = evt.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const submitNote = evt => {

        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitNote}>
                <input onChange={handleChange} name="title" placeholder="Note title..." value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Note content.." value={note.content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;