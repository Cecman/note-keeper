import React from 'react';
import './../styles/Header.css';
import Avatar from './Avatar';
import Time from './Time';
import EventNoteIcon from '@material-ui/icons/EventNote';


function Header() {

    return (
        <header>
            <EventNoteIcon className="note-icon" />
            <h1 className="main-title">Note Keeper</h1>
            <Time />
            <Avatar />  {/*placeholder img*/}
        </header>
    );
}

export default Header;