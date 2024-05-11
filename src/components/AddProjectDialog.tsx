import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import Button from './Button';
import Input from './Input';

interface Props {
  open: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

export default function AddProjectDialog({
  open,
  setOpenDialog,
}: Props): ReactElement {
  function handleCancelClick() {
    setOpenDialog((prevValue) => !prevValue);
  }

  function handleSaveClick() {
    setOpenDialog((prevValue) => !prevValue);
    console.log('TODO');
  }

  return (
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-[35rem] mt-16"
      open={open}
    >
      <div className="flex flex-col">
        <menu className="flex items-center justify-end gap-4 my-4">
          <Button variant="alert" onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleSaveClick}>
            Save
          </Button>
        </menu>
        <p className="flex flex-col gap-4 my-4">
          <Input type="text" label="Title" />
          <Input type="text" label="Description" />
          <Input type="date" label="Due Date" />
        </p>
      </div>
    </dialog>
  );
}
