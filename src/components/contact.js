import React from 'react'
import '../css/contact.css';
import github from '../images/github-logo.svg'
import top from '../images/top.png'

function contact() {
    return (
        <div className = "contact" id = "c">
            <div className = "contact-me">
            <h2>Contact</h2>
            <p className = "email">E-Mail : hbk89@naver.com</p>
            <a href = "https://github.com/hbk89">
                <img src = {github} alt = "github" className = "github"/>
            </a>
            </div>
            <div className = "ontop">
                <image src={top} className="top" onClick = {()=>document.getElementById('h').scrollIntoView({behavior: 'smooth'})}/>
            </div>
        </div>
    )
}

export default contact;