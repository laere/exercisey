import React from "react";
import { connect } from "react-redux";
import { fetchWorkouts } from "actions/workoutActions";
import WorkoutItem from "components/workouts/WorkoutItem";

class WorkoutList extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  renderList() {
    const { workoutList } = this.props;

    if (!workoutList) return;

    return workoutList.map(workout => {
      return <WorkoutItem key={workout._id} workout={workout} />;
    });
  }

  render() {
    console.log(this.props.workoutList);
    return (
      <div>
        <h1 className="title is-3">Your current workouts:</h1>
        {this.renderList()}
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
