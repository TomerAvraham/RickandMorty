import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Characters from './components/Characters'
import Quiz from "./components/Quiz";
import Episodes from "./components/Episodes";
import Season1 from "./components/seasons/Season1"
import Season2 from "./components/seasons/Season2"
import Season3 from "./components/seasons/Season3"
import Season4 from "./components/seasons/Season4"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/characters" component={Characters}/>
          <Route path="/quiz" component={Quiz}/>
          <Route path="/season" component={Episodes}/>
          <Route path="/so1" component={Season1}/>
          <Route path="/so2" component={Season2}/>
          <Route path="/so3" component={Season3}/>
          <Route path="/so4" component={Season4}/>
          <Redirect from="/" to="/characters"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
