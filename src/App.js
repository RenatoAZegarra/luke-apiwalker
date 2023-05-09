import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './components/Home.jsx';
import People from './components/People.jsx';
import Planet from './components/Planets.jsx';

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
};

export default App;
