import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
    <Nav></Nav>
    <main>
     
          <About></About>
       
          <ContactForm></ContactForm>
        
    </main>
  </div>
  );
}

export default App;