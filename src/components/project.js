import React from 'react'
import '../css/project.css'
import project1 from "../images/canvas.jpg"

function project() {
    return (
        <div className = "project" id = "p">
            <h2>Project</h2>
            <div className = "project-container">
            <img className = "project-image" src= {project1} ></img>
            <div className = "project-spec">
                <h3 className="project-title">Graphics API Compatible</h3>
                <p className = "project-term">개발기간</p>
                <p className = "project-company">소속회사</p>
                <p className = "project-skill">사용기술</p>
                <p className = "project-detail">설명</p>
            </div>
            </div>
            <div className = "project-container">
            <img className = "project-image" src= {project1} ></img>
            <div className = "project-spec">Wapl</div>
            </div>
            <div className = "project-container">
            <img className = "project-image" src= {project1} ></img>
            <div className = "project-spec">3D Video Studio</div>
            </div>
            <div className = "project-container">
            <img className = "project-image" src= {project1} ></img>
            <div className = "project-spec">FSGAN App</div>
            </div>
        </div>
    );
}

export default project;