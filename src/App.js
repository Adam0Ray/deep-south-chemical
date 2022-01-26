import './App.css'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

//Navbar Components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import Products from './Components/Products'
import SpecialtyTools from './Components/SpecialtyTools'
import Contact from './Components/Contact'


//Login Components
import Dashboard from './Components/Dashboard'
import Create from './Components/Create'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Project from './Components/Project'
import Sidebar from './Components/SideBar/Sidebar'
import OnlineUsers from './Components/OnlineUsers'

//Services Components
import ServicesOriginal from './Components/ServicesOriginal';
import ServicesPit from './Components/ServicesPit';
import ServicesWellbore from './Components/ServicesWellbore';
import ServicesGel from './Components/ServicesGel';
import ServicesStimulation from './Components/ServicesStimulation';
import ServicesCorrosion from './Components/ServicesCorrosion';
import ServicesUK from './Components/ServicesUK';
import ServicesLab from './Components/ServicesLab';



function App() {
  const {user, authIsReady} = useAuthContext()

  return (     
      <div className="app">
        {authIsReady && (
        <BrowserRouter>
        <div className="container">
        {user && <Sidebar />}
          <div className="navbar-routes">
          <Navbar />
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
              <Contact/>
            </Route> 
            </Switch>

            
            <Switch>
              <Route exact path="/ServicesOriginal">
                <ServicesOriginal/>
              </Route>
              <Route exact path="/ServicesPit">
                <ServicesPit/>
              </Route>
              <Route exact path="/ServicesWellbore">
                <ServicesWellbore/>
              </Route>
              <Route exact path="/ServicesGel">
                <ServicesGel/>
              </Route>
              <Route exact path="/ServicesStimulation">
                <ServicesStimulation/>
              </Route>
              <Route exact path="/ServicesCorrosion">
                <ServicesCorrosion/>
              </Route>
              <Route exact path="/ServicesUK">
                <ServicesUK/>
              </Route>
              <Route exact path="/ServicesLab">
                <ServicesLab/>
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/Dashboard">
                {!user && <Redirect to='/Dashboard' />}
                {user && <Dashboard />}
              </Route>
              <Route exact path="/Create">
                {!user && <Redirect to='/Dashboard' />}
                {user && <Create />}
              </Route>
              <Route exact path="/Projects/:id">
                {!user && <Redirect to='/Dashboard' />}
                {user && <Project />}
              </Route>
              <Route exact path="/Login">
                {user && <Redirect to ='/Dashboard'/>}
                {!user && <Login />}
              </Route>
              {/* <Route exact path="/Signup">
                {user && <Redirect to ='/Dashboard'/>}
                {!user && <Signup />}
              </Route> */}
            </Switch>
            
          </div>
          {user && <OnlineUsers />}
          </div>
          
          </BrowserRouter>
          )}
        
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
  );
}

export default App;
