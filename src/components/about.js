import React from 'react';
import profile from '../images/profile.jpg'
import '../css/about.css'

function about() {
    return (
        <div className = "about" id = "a">
            <img src = { profile } className = "about-photo" />
            <h3 className ="about-profile">Developer</h3>
        </div>
    );
}

export default about;