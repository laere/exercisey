import React from "react";
// import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ExerciseItem extends React.Component {
  render() {
    const { name, _id } = this.props.exercise;
    const { workout } = this.props.workouts;
    return (
      <nav className="level" style={{ marginTop: "40px" }}>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">{name}</p>
          </div>
        </div>
        <div className="level-item">
          <div>
            <a className="button is-primary" style={{ marginRight: "10px" }}>
              Add Set
            </a>
            <a className="button is-link" style={{ marginRight: "10px" }}>
              Edit
            </a>
            <Link
              to={`/workouts/${workout._id}/exercises/delete/${_id}`}
              className="button is-danger"
            >
              Delete
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(mapStateToProps)(ExerciseItem);
