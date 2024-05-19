import React, { ReactElement } from 'react';
import { ProjectListInterface } from '../common/interfaces';

interface Props {
  projectList: ProjectListInterface;
}

export default function ProjectList({ projectList }: Props): ReactElement {
  return (
    <>
      <label>Projects</label>
      {projectList && projectList.projects.length > 0 && (
        <ul>
          {projectList.projects.map((project) => (
            <li key={project.title}>
              <label>{project.title}</label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
