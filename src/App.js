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
<<<<<<< HEAD
    <Nav/>
      <Switch>
        <Route component={Home} path='/https://www.brookemadison.tech/' exact />
        <Route component={About} path='/https://www.brookemadison.tech/about'/>
        <Route component={Project} path='/https://www.brookemadison.tech/project'/>
        <Route component={Resume} path='/https://www.brookemadison.tech/resume'/>
        <Route component={Contact} path='/https://www.brookemadison.tech/contact'/>
      </Switch>
=======
      <Nav/>
      <Routes>
        <Route path='https://www.brookemadison.tech' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
        <Route path='notfoundpage' element={<NotFoundPage />} />
      </Routes>
>>>>>>> 51573a20e7b746b36ac9ceeb3f1d7a38b5969146
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;