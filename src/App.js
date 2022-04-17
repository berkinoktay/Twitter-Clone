import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
function App() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex">
      <Sidebar />
      <Main />
      <Trends />
    </div>
  );
}

export default App;
