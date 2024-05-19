import React, { Dispatch, ReactElement, SetStateAction, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import { createPortal } from 'react-dom';
import { useProjectContext } from './ProjectProvider';
import { ProjectInterface } from '../common/interfaces';

interface Props {
  showComponent: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

export default function AddProject({
  showComponent,
  setOpenDialog,
}: Props): ReactElement {
  const { projectList, setProjectList } = useProjectContext();

  // Refs
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  // Handles cancel of adding a project
  function handleCancelClick() {
    setOpenDialog((prevValue) => !prevValue);
  }

  // Handles saving a new project
  function handleSaveClick() {
    setOpenDialog((prevValue) => !prevValue);
    const payload: ProjectInterface = {
      title: titleRef.current?.value ?? '',
      description: descRef.current?.value ?? '',
      date: dateRef.current?.value
        ? new Date(dateRef.current?.value).toDateString()
        : 'No due date',
    };

    projectList.projects.push(payload);

    setProjectList(projectList);

    console.log(projectList);
  }

  const component = (
    <div className={showComponent ? 'flex flex-col' : 'hidden'}>
      <menu className="flex items-center justify-end gap-4 my-4">
        <Button variant="alert" onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button variant="dark" onClick={handleSaveClick}>
          Save
        </Button>
      </menu>
      <p className="flex flex-col gap-4 my-4">
        <Input ref={titleRef} type="text" label="Title" />
        <Input ref={descRef} type="text" label="Description" />
        <Input
          ref={dateRef}
          type="date"
          label="Due Date"
          min={new Date().toISOString()}
        />
      </p>
    </div>
  );

  const container = document.getElementById('rightSide');

  // Using a portal to bring this to the right side
  return createPortal(component, container!);
}
