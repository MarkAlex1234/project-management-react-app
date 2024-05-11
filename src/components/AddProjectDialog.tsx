import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import Button from './Button';
import { format } from 'date-fns';

interface Props {
  open: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

export default function AddProjectDialog({
  open,
  setOpenDialog,
}: Props): ReactElement {
  // Set today's date as the min value for the date input.
  const today = new Date();
  // Format today's date as YYYY-MM-DD for the min attribute of the input
  const formattedToday = format(today, 'yyyy-MM-dd');

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
      <div className="flex gap-4 flex-col">
        <menu className="flex items-center justify-end gap-4 my-4">
          <Button variant="alert" onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleSaveClick}>
            Save
          </Button>
        </menu>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <input
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Due Date
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            min={formattedToday}
          />
        </p>
      </div>
    </dialog>
  );
}
