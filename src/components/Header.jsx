import React from 'react';
import Avatar from './Avatar';
import Time from './Time';
import EventNoteIcon from '@material-ui/icons/EventNote';


function Header() {

    return (
        <header>
            <h1 className="main-title"><EventNoteIcon fontSize="25"/>Note Keeper</h1>
            <Time />
            <Avatar />
        </header>
    );
}

export default Header;