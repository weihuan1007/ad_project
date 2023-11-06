import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminNavbar from './Project/Admin/AdminNavbar';
import AdminProfile from './Project/Admin/AdminProfile';
import AdminSettings from './Project/Admin/AdminSettings';
import AdminDashBoard from './Project/Admin/AdminDashBoard';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <AdminNavbar />
      <Routes>
        <Route path='/AdminDashBoard' element={<AdminDashBoard />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />
        <Route path='/AdminSettings' element={<AdminSettings />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


