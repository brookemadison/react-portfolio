import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
    <Nav></Nav>
    <main>

          <Home></Home>
          <About></About>
          <Project></Project>
          <ContactForm></ContactForm>
        
    </main>
    <Footer></Footer>
  </div>
  );
}

export default App;