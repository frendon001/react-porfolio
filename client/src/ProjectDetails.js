import React from 'react';
import { Redirect } from 'react-router-dom';

import Skills from './Skills';
import { projects } from './myPortfolioData.json';

function ProjectDetails({match}) {
  const { id } = match.params;
  if(projects[id]){
    const project = projects[id];
    const projectDetailsStyle = {
      marginTop: "0"
    };
    return (
      <>
        <section id="project-details" className="bottom-wrapper" style={projectDetailsStyle}>
          <div className="inner"> 
            <h2 id="heading" className="major">{project.name}</h2>
            <img src={`/assets/images/${project.image}`} alt={project.name} className="image fit-med" />
            <section className="details">
              <p>{project.info}</p>
              <ul className="icons">
                <li >
                  <a className="icon fa-globe fa-2x" href={project.site}><span className="label">Globe</span></a>
                  <a href={project.site}>{project.site}</a>
                </li>
                <li >
                  <a className="icon fa-github fa-2x" href={project.github}><span className="label">Github</span></a>
                  <a href={project.github}>{project.github}</a>
                </li>
              </ul>
              <Skills skills={project.skills} keyname={project.name}/>
            </section>
          </div>
        </section>
      </> 
    );
  } else {
    return <Redirect to="/#project-snapshots" />;
  }
}

export default ProjectDetails;