import 'bootstrap/dist/css/bootstrap.min.css';
import { TheLayout } from './container';
import { Login } from './view';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './app.css';
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  return (
    <Router>
      <Switch>
        <Route exact path="/404">
          <div>404</div>
        </Route>
        <Route exact path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/">
          { isLoggedIn ?  <TheLayout /> : <Redirect to="/login"/> }
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
