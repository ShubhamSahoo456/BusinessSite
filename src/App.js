import react from 'react';
import { Switch , Route } from 'react-router';
import About from './About';
import Service from './Services';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';


const App = ()=>{


  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
    </>
  )
}

export default App;