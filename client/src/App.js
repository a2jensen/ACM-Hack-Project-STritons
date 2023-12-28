import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar/navbar/Navbar';

// sets up routes for every page
// navbar component is wrapped around every page as well
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/dashboard'
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
