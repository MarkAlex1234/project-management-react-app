import React, { ReactElement, useState } from 'react';
import Button from './Button';
import AddProjectDialog from './AddProjectDialog';

export default function SideBar(): ReactElement {
  const [showAddProject, setShowAddProject] = useState<boolean>(false);

  function handleAddProject() {
    setShowAddProject((prevValue) => !prevValue);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {showAddProject && (
        <AddProjectDialog
          open={showAddProject}
          setOpenDialog={setShowAddProject}
        />
      )}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button
        variant={'primary'}
        onClick={handleAddProject}
        disabled={showAddProject}
      >
        + Add Projects
      </Button>
      <Button variant={'secondary'}>Projects</Button>
    </aside>
  );
}
