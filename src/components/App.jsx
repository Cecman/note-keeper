import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {

    const [notes, setNotes] = useState([]);

    const createNote = note => {
        setNotes(prevValue => {
            return [...prevValue, note]
        });
    }
    //use setState function to loop through the previous state ofthe array and return everything that does not equal the id
    const deleteNote = id => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    

    return (
        <div>
            <Header />
            <CreateArea onAdd={createNote} />
            {notes.map((noteItem, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;