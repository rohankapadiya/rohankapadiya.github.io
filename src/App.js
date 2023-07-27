import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import About2 from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Project" component={Project} />
                <Route exact path="/Contact" component={ContactMe} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <About2 />
  );
}

function Project() {
  return (
    <Projects/>
  );
}

function ContactMe() {
  return (
  <Contact />
  );
}

function Home() {
  return (
    <Main />
  );
}
export default App;
