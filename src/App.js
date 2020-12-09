import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import {createStore ,applyMiddleware} from  "redux";
import {Provider} from  "react-redux";
import  "./assets/css/main.css";
import Home from  "./features/Home";
import reducer from  "./redux/reducer";
import thunk from 'redux-thunk';
const store  = createStore(reducer ,applyMiddleware(thunk));
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
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App ;
