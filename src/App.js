import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';






function App() {
  return (
    <Router>

      
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" component={About}/>
          <Route path="/signup" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
  <div>
    <h1 className="ho">Home Page</h1>
    <p> Click on the above links to sign in/ sign up</p>
  </div>
  )
}



export default App;


