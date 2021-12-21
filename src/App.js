import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import SpecialtyTools from './Components/SpecialtyTools';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="navbar-routes">
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route> 
          <Route exact path="/SpecialtyTools">
            <SpecialtyTools />
          </Route> 
          <Route exact path="/Contact">
            <Contact />
          </Route> 
          </Switch>
        </div>
        <div className="footer">
        <footer className="footer">
                <p>To speak with a sales representative, call 1-800-737-3546</p>
                <p>
                © Copyright 2020 Deep South Chemical, Inc.<br/>
                For more information,<br/>
                email: info@deep-south-chemical.com
                </p>
        </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
