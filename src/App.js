import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Nav from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
<BrowserRouter basename="/react-portfolio/">    <div>
    <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
