import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './assets/Dashboard.jsx'
import Navbar from './assets/Navbar.jsx'
import Search from './assets/Search.jsx'
function App() {
  return (
    <div>
  <div>
    <Navbar />
  </div>
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1 }}>
      <Search />
    </div>
    <div className="dash" style={{ flex: 1 }}>
      <Dashboard />
    </div>
  </div>
</div>

  );
}

export default App;
