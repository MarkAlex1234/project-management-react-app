import React, { Dispatch, ReactElement, SetStateAction, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import { createPortal } from 'react-dom';

interface Props {
  showComponent: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

export default function AddProject({
  showComponent,
  setOpenDialog,
}: Props): ReactElement {
  // Refs
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  // Handles cancel of adding a project
  function handleCancelClick() {
    setOpenDialog((prevValue) => !prevValue);
  }

  // Handles saving a new project
  function handleSaveClick() {
    setOpenDialog((prevValue) => !prevValue);
    console.log('TODO');
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
