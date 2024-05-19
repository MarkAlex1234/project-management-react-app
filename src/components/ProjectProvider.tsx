import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { ProjectListInterface } from '../common/interfaces';

// Define the type for the context value
interface ProjectContextType {
  projectList: ProjectListInterface;
  setProjectList: Dispatch<SetStateAction<ProjectListInterface>>;
}

// Create the context with default values
export const ProjectContext = createContext<ProjectContextType>({
  projectList: { projects: [] },
  setProjectList: () => {},
});

// Create a provider component
export const ProjectProvider = ({ children }) => {
  const [projectList, setProjectList] = useState<ProjectListInterface>({
    projects: [],
  });

  return (
    <ProjectContext.Provider
      value={{
        projectList,
        setProjectList,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the ProjectContext
export const useProjectContext = (): ProjectContextType => {
  return useContext(ProjectContext);
};
