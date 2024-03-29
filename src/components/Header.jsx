import React from 'react';

import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'background' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.scdn.co/image/ab67616d0000b273f1ada8aa7b6b403e543cc517"/>
                </a>
            </div>
        </header>
    );
}