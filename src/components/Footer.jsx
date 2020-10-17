import React from 'react';
import './../styles/Footer.css';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright&#169; {year}</p>
        </footer>
    );
}

export default Footer;