import React, { useState } from 'react';
import Avatar from './Avatar';
import Time from './Time';


function Header() {

    return (
        <header>
            <h1 className="main-title">Note Keeper</h1>
            <Time />
            <Avatar />
        </header>
    );
}

export default Header;