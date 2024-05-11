import SideBar from './components/SideBar';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <div id="rightSide"></div>
    </main>
  );
}

export default App;
