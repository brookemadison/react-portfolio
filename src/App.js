import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route component={Home} path='/home' exact />
        <Route component={About} path='/about'/>
        <Route component={Project} path='/project'/>
        <Route component={Resume} path='/resume'/>
        <Route component={Contact} path='/contact'/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;