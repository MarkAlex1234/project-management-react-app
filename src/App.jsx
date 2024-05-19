import SideBar from './components/SideBar';
import { ProjectProvider } from './components/ProjectProvider';

function App() {
  return (
    <ProjectProvider>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        <div id="rightSide" className="w-full p-8"></div>
      </main>
    </ProjectProvider>
  );
}

export default App;
