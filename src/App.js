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
        <Route component={Home} path='/https://brookemadison.github.io/react-portfolio/' exact />
        <Route component={About} path='/https://brookemadison.github.io/about'/>
        <Route component={Project} path='/https://brookemadison.github.io/project'/>
        <Route component={Resume} path='/https://brookemadison.github.io/resume'/>
        <Route component={Contact} path='/https://brookemadison.github.io/contact'/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;