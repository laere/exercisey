import React from "react";
// import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SetList from "components/sets/SetList";

class ExerciseItem extends React.Component {
  render() {
    const { name, _id, sets } = this.props.exercise;
    const { workout } = this.props.workouts;
    return (
      <React.Fragment>
        <nav className="level" style={{ marginTop: "40px" }}>
          <div>
            <div>
              <p className="title">{name}</p>
            </div>
          </div>
          <div>
            <div>
              <Link
                to={`/workouts/${workout._id}/exercises/${_id}/sets/new`}
                className="button is-primary is-small is-outlined"
                style={{ marginRight: "10px" }}
              >
                Add Set
              </Link>
              <Link
                to={`/workouts/${workout._id}/exercises/edit/${_id}`}
                className="button is-link is-small is-outlined"
                style={{ marginRight: "10px" }}
              >
                Edit
              </Link>
              <Link
                to={`/workouts/${workout._id}/exercises/delete/${_id}`}
                className="button is-danger is-small is-outlined"
              >
                Delete
              </Link>
            </div>
          </div>
        </nav>
        <div className="level-item has-text-centered">
          <SetList sets={sets} exerciseId={_id} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(mapStateToProps)(ExerciseItem);
