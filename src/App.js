import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Nav from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route path='/react-portfolio' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='project' element={<Project />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;