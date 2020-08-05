import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PageRenderer from './Pagerenderer';
import Footer from './components/footer/Footer';
import Secondaryfooter from './components/secondaryfooter/Secondaryfooter';
import Imageflower from './components/imageflower/Imageflower';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/imageflower/:id" component={Imageflower} />
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
        <Footer />
        <Secondaryfooter />
      </div>
    </Router>
  );
}

export default App;
