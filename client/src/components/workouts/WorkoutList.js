import React from "react";
import { connect } from "react-redux";
import { fetchWorkouts } from "actions/workoutActions";
import WorkoutItem from "components/workouts/WorkoutItem";
import Spinner from "components/common/Spinner";

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  renderList() {
    const { workoutList, loading } = this.props.workouts;

    if (!workoutList || loading) {
      return <Spinner />;
    }

    return workoutList.map(workout => {
      return <WorkoutItem key={workout._id} workout={workout} />;
    });
  }

  render() {
    return (
      <div>
        <h1 className="title is-3">Your current workouts:</h1>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { fetchWorkouts }
)(WorkoutList);
