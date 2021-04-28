import React from "react";
import model from '../models/skill_model'
import "../css/skill.css";
import cpp_logo from "../images/skills/c++.png";
import js_logo from "../images/skills/js.png";
import react_logo from "../images/skills/react.png";
import mobx_logo from "../images/skills/mobx.png";
import nodejs_logo from "../images/skills/nodejs.png";
import kube_logo from "../images/skills/kube.png";
import docker_logo from "../images/skills/docker.png";
import d3d_logo from "../images/skills/d3d.png";
import vulkan_logo from "../images/skills/vulkan.png";
import faceswap_logo from "../images/skills/faceswap.png";

function skill() {
  return (
    <div className="skill" id="s">
      <h3>Languages</h3>
      <div className="skill-container">
        <div>
        <img className="skill-item" src={cpp_logo} />
          <p>C++</p>
        </div>
        <div>
          <img className="skill-item" src={js_logo} />
          <p>JavaScript</p>
        </div>
      </div>
      <h3>Front-end</h3>
      <div className="skill-container">
        <div>
          <img className="skill-item" src={react_logo} />
          <p>React</p>
        </div>
          <div>
          <img className="skill-item" src={mobx_logo} />
          <p>Mobx</p>
        </div>
      </div>
      <h3>Back-end</h3>
      <div className="skill-container">
      <div>
          <img className="skill-item" src={nodejs_logo} />
          <p>nopdejs</p>
        </div>
        <div>
          <img className="skill-item" src={kube_logo} />
          <p>Kubenetes</p>
        </div>
        <div>
          <img className="skill-item" src={docker_logo} />
          <p>Docker</p>
        </div>
      </div>
      <h3>Graphics</h3>
      <div className="skill-container">
      <div>
          <img className="skill-item" src={d3d_logo} />
          <p>Direct3D</p>
        </div>
        <div>
          <img className="skill-item" src={vulkan_logo} />
          <p>Vulkan</p>
        </div>
      </div>
      <h3>Interests AI</h3>
      <div className="skill-container">
      <div>
          <img className="skill-item" src={faceswap_logo} />
          <p>FaceSwap</p>
        </div>
      </div>
    </div>
  );
}

export default skill;
