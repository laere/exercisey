import React from "react";
import { connect } from "react-redux";
import { fetchWorkouts } from "actions/workoutActions";

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    console.log(this.props.workoutList);
    return (
      <div>
        <h1 className="title is-3">Your current workouts:</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workoutList: workouts.workoutList };
};

export default connect(
  mapStateToProps,
  { fetchWorkouts }
)(WorkoutList);
