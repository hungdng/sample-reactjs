import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={asyncComponent(() => import("./main/MainApp"))} />
          <Route path="/home" component={asyncComponent(() => import("./main/MainApp"))} />
          <Route
            render={() => (
              <div className="NotFoundMessage">404 Page Not Found</div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
