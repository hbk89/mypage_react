import React from "react";
import "../css/navigation.css";

function navigation() {
  return (
    <div className="nav">
      <div className="nav-ul">
        <li
          className="nav-li"
          onClick={() => {
            document.getElementById("c").scrollIntoView({behavior: "smooth"});
          }}
        >
          {" "}
          Contact{" "}
        </li>
        <li
          className="nav-li"
          onClick={() => {
            document.getElementById("p").scrollIntoView({behavior: "smooth"});
          }}
        >
          {" "}
          Project{" "}
        </li>
        <li
          className="nav-li"
          onClick={() => {
            document.getElementById("s").scrollIntoView({behavior: "smooth"});
          }}
        >
          {" "}
          Skill{" "}
        </li>
        <li
          className="nav-li"
          onClick={() => {
            document.getElementById("a").scrollIntoView({behavior: "smooth"});
          }}
        >
          {" "}
          About{" "}
        </li>
        <li
          className="nav-li"
          onClick={() => {
            document.getElementById("h").scrollIntoView({behavior: "smooth"});
          }}
        >
          {" "}
          Home{" "}
        </li>
      </div>
    </div>
  );
}

export default navigation;
