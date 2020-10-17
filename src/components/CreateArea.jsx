import React, { useState, useEffect } from 'react';
import './../styles/CreateArea.css';
import Input from './Input';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    }

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

    useEffect(() => {
        console.log('Rendered');
    }, [isExpanded]);

    return (
        <div>
            <form className="create-note">
                {isExpanded && <Input onChange={handleChange} name="title" placeholder="Note title..." value={note.title} />}
                <textarea onClick={handleExpand} onChange={handleChange} name="content" placeholder="Note content.." value={note.content} rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;