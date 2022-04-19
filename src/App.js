import Main from './components/pages/Main';
import Explore from './components/pages/Explore';
import Lists from './components/pages/Lists';
import Messages from './components/pages/Messages';
import Notifications from './components/pages/Notifications';
import Profile from './components/pages/Profile';
import Bookmarks from './components/pages/Bookmarks';

import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Trends />
    </div>
  );
}

export default App;
