// import Navigation from "./components/Navigation/index";
// import Home from "./components/Home/index"
// import About from "./components/About/index";
// import Project from "./components/Project/index";
// import ContactForm from "./components/Contact/index";
// import Footer from "./components/Footer/index";
// import "bootstrap/dist/css/bootstrap.min.css";


// function App() {
//   return (
//     <div>
//       <Navigation></Navigation>
//       <main>
//         <Home></Home>
//         <About></About>
//         <Project></Project>
//         <ContactForm></ContactForm>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
      <Switch>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Project" element={<Project/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        {/* <Route component={Resume} path='/Resume'/> */}
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
