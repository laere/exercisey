import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";
import Header from "components/common/Header";
import LandingPage from "components/common/LandingPage";
import Register from "components/Register";
import Login from "components/Login";
import WorkoutList from "components/workouts/WorkoutList";
import WorkoutNew from "components/workouts/WorkoutNew";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/workouts" component={WorkoutList} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/workouts/new" component={WorkoutNew} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
