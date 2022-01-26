import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Services Components
import ServicesOriginal from './ServicesOriginal';
import ServicesPit from './ServicesPit';
import ServicesWellbore from './ServicesWellbore';
import ServicesGel from './ServicesGel';
import ServicesStimulation from './ServicesStimulation';
import ServicesCorrosion from './ServicesCorrosion';
import ServicesUK from './ServicesUK';
import ServicesLab from './ServicesLab';

const ServicesNavbar = () => {

    return (  
        <div>
        {/* <BrowserRouter>
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
            </BrowserRouter> */}
            <h1>Services</h1>
        <div>
            <nav className="services-navbar">
                        <p>Filter by:</p>
                        <Link to="/ServicesOriginal">All</Link>
                        <Link to="/ServicesPit">Complete Pit Cleaning Systems</Link>
                        <Link to="/ServicesWellbore">Wellbore Cleaning Systems</Link>
                        <Link to="/ServicesGel">Linear Gel Liquid Suspension Systems</Link>
                        <Link to="/ServicesStimulation">Stimulation Chemicals</Link>
                        <Link to="/ServicesCorrosion">Corrosion Inhibitors</Link>
                        <Link to="/ServicesUK">UK Environmental Products</Link>
                        <Link to="/ServicesLab">Laboratory Facilities</Link>                    
            </nav>

        </div>
        
        </div>
    );
}
 
export default ServicesNavbar ;