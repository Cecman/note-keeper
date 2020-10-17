import React, { useState } from 'react';
import './../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import Form from './Form';

function App() {

    const [notes, setNotes] = useState([]);

    const createNote = note => {
        setNotes(prevValue => {
            return [...prevValue, note]
        });
    }

    const deleteNote = id => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    let loggedIn = true; //to check this against database

    return (
        <div>
            <Header />
            {!loggedIn ? <Form isLoggedIn={loggedIn} /> : <CreateArea onAdd={createNote} />}
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