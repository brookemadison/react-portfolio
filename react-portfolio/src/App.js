import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
