import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom'
import Header from '../components/Header';
import RouteArticle from '../components/RouteArticle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Header} />
              <Route path="/articles" component={RouteArticle} />
          </Switch>
      </div>
    );
  }
}

export default App;
