import React, { ReactElement } from 'react';
import { ProjectListInterface } from '../common/interfaces';
import { v4 as uuidv4 } from 'uuid';

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
            <li key={uuidv4()}>
              <label>{project.title}</label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
