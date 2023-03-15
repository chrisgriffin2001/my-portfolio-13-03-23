import React from 'react';

function Project({ project }) {
  return (
    <li>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Links:</p>
      <ul>
        {project.links.map(link => (
          <li key={link.url}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <img src={project.image} alt={`Screenshot of ${project.name}`} />
    </li>
  );
}

export default Project;
