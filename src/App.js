import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Navbar Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import SpecialtyTools from './Components/SpecialtyTools';
import Contact from './Components/Contact';
// import ContactList from './Components/ContactList';

//Login Components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Sidebar from './Components/SideBar/Sidebar'
import OnlineUsers from './Components/OnlineUsers';

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
              <Route exact path="/dashboard">
                {!user && <Redirect to='/home' />}
                {user && <Dashboard />}
              </Route>
              <Route exact path="/create">
                {!user && <Redirect to='/home' />}
                {user && <Create />}
              </Route>
              <Route exact path="/projects/:id">
                {!user && <Redirect to='/home' />}
                {user && <Project />}
              </Route>
              <Route exact path="/login">
                {user && <Redirect to ='/home'/>}
                {!user && <Login />}
              </Route>
              <Route exact path="/signup">
                {user && <Redirect to ='/home'/>}
                {!user && <Signup />}
              </Route>
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
