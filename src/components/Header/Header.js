import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1><span className='title'>AMBIGUOUS</span> CHOICE...<FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> </h1>
        </div>
    );
};

export default Header;