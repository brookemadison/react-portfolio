// import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
        <Route path='notfoundpage' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;