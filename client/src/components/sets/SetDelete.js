import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { deleteSet } from "actions/setActions";
import { Link, withRouter } from "react-router-dom";

class SetDelete extends React.Component {
  renderActions() {
    const { id, exerciseId, setId } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.deleteSet(id, exerciseId, setId, this.props.history)
          }
          className="button is-danger"
        >
          Delete
        </button>
        <Link to={`/workouts/${id}`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Set"
          content="Are you sure you want to delete this set?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteSet }
)(withRouter(SetDelete));
