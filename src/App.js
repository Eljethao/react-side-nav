import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';
import SideNav from '../src/lib/SideNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <div className="main-content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
