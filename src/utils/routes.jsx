import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home/Home'

export const routes = () => {
  return(
        <Switch>
          <Route path="/Categories">
            <About />
          </Route>
          <Route path="/Cart">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
