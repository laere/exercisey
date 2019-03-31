import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchExercise } from "actions/exerciseActions";

class SetItem extends React.Component {
  render() {
    const { workout } = this.props.workouts;
    return (
      <tr className="panel">
        <td>{this.props.set.repcount}</td>
        <td>{this.props.set.weight}</td>
        <td>
          <Link
            to={`/workouts/${workout._id}/exercises/${
              this.props.exerciseId
            }/sets/delete/${this.props.set._id}`}
            className="button is-small is-outlined"
          >
            Delete
          </Link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { fetchExercise }
)(SetItem);
