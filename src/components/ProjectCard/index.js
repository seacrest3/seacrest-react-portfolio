import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Website:</strong> <a href={props.website}>Click <span style={{color: '#fdc949'}}>here</span> to visit the website</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={props.github}>Click <span style={{color: '#fdc949'}}>here</span> to visit the GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
