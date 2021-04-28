import React from "react";
import "../css/skill.css";

function skill() {
  return (
    <div className="skill" id="s">
      <h3>Languages</h3>
      <div className="skill-container">
        <div className="skill-item">
          <div className="skill-exp skill-80">C++</div>
        </div>
        <div className="skill-item">
          <div className="skill-exp skill-80">JavaScript</div>
        </div>
      </div>
      <h3>Front-end</h3>
      <div className="skill-container">
        <div className="skill-item">
        <div className="skill-exp skill-60">React</div>
        </div>
        <div className="skill-item">
        <div className="skill-exp skill-40">Mobx</div>
        </div>
      </div>
      <h3>Back-end</h3>
      <div className="skill-container">
        <div className="skill-item">
        <div className="skill-exp skill-60">nodeJS</div>
        </div>
        <div className="skill-item"><div className="skill-exp skill-40">FastAPI</div></div>
        <div className="skill-item"><div className="skill-exp skill-60">Kubenetes</div></div>
        <div className="skill-item"><div className="skill-exp skill-60">Docker</div></div>
      </div>
      <h3>Graphics</h3>
      <div className="skill-container">
        <div className="skill-item"><div className="skill-exp skill-60">Direct3D</div></div>
        <div className="skill-item"><div className="skill-exp skill-40">Vulkan</div></div>
      </div>
      <h3>Interests AI</h3>
      <div className="skill-container">
        <div className="skill-item"><div className="skill-exp skill-40">FaceSwap</div></div>
      </div>
    </div>
  );
}

export default skill;
