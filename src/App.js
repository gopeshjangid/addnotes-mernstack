import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import  "./assets/css/main.css";
import Home from  "./features/Home";

/**
 * React App component.
 */
class App extends Component {
  /**
   * Component initialization
   * @param {object} props
   */
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  /**
   * render the component view
   */
  render () {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App ;
