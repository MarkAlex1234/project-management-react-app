import React, { ReactElement } from 'react';
import Button from './Button';

export default function SideBar(): ReactElement {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button variant={'primary'}>+ Add Projects</Button>
      <Button variant={'secondary'}>Projects</Button>
    </aside>
  );
}