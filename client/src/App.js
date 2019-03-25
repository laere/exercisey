import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";
import Header from "components/common/Header";
import LandingPage from "components/common/LandingPage";
import Register from "components/Register";
import Login from "components/Login";
import WorkoutList from "components/workouts/WorkoutList";
import WorkoutNew from "components/workouts/WorkoutNew";
import WorkoutShow from "components/workouts/WorkoutShow";
import WorkoutDelete from "components/workouts/WorkoutDelete";
import WorkoutEdit from "components/workouts/WorkoutEdit";
import ExerciseNew from "components/exercises/ExerciseNew";
import ExerciseDelete from "components/exercises/ExerciseDelete";
import ExerciseEdit from "components/exercises/ExerciseEdit";

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
            // Private routes (When use is logged in)
            <PrivateRoute exact path="/workouts" component={WorkoutList} />
            <PrivateRoute exact path="/workouts/new" component={WorkoutNew} />
            <PrivateRoute exact path="/workouts/:id" component={WorkoutShow} />
            <PrivateRoute
              exact
              path="/workouts/delete/:id"
              component={WorkoutDelete}
            />
            <PrivateRoute
              exact
              path="/workouts/edit/:id"
              component={WorkoutEdit}
            />
            <PrivateRoute
              exact
              path="/workouts/:id/exercises/new"
              component={ExerciseNew}
            />
            <PrivateRoute
              exact
              path="/workouts/:id/exercises/delete/:exerciseId"
              component={ExerciseDelete}
            />
            <PrivateRoute
              exact
              path="/workouts/:id/exercises/edit/:exerciseId"
              component={ExerciseEdit}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
