import Navigation from "./components/Navigation/index";
import Home from "./components/Home/index"
import About from "./components/About/index";
import Project from "./components/Project/index";
import ContactForm from "./components/Contact/index";
import Footer from "./components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Navigation></Navigation>
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


// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import Home from './components/Home';
// import About from './components/About';
// import Project from './components/Project';
// import Contact from './components/Contact';
// // import Resume from './components/Resume';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//     <Navigation/>
//       <Routes>
//         <Route component={Home} path='/react-portfolio' exact />
//         <Route component={About} path='/about'/>
//         <Route component={Project} path='/project'/>
//         <Route component={Contact} path='/contact'/>
//         {/* <Route component={Resume} path='/Resume'/> */}
//       </Routes>
//       <Footer/>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
