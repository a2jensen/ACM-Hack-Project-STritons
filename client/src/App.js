import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importing pages and navbar
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Routine from './pages/Routine'
import InfoLowerBody from './pages/InfoLowerBody'
import InfoUpperBody from './pages/InfoUpperBody'
import InfoRoutines from './pages/InfoRoutines'

import Navbar from './components/navbar/navbar/Navbar'


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
            <Route 
              path='/routine'
              element={<Routine />}
            />
            <Route 
              path='/infoupperbody'
              element={<InfoUpperBody />}
            />
            <Route 
              path='/infolowerbody'
              element={<InfoLowerBody />}
            />
            <Route 
              path='/inforoutines'
              element={<InfoRoutines />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
