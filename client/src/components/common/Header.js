import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "actions/authActions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Header extends React.Component {
  onLogOutClick = () => {
    this.props.logoutUser();
  };

  renderContent() {
    const { isAuthenticated, user } = this.props.auth;
    switch (isAuthenticated) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <Link to="/register" className="navbar-item">
              Register
            </Link>
            <Link to="/login" className="navbar-item">
              Login
            </Link>
          </React.Fragment>
        );
      default:
        return [
          <Link
            to="/workouts/new"
            key="3"
            className="button is-fullwidth is-danger is-rounded is-outlined is-inverted"
            style={{ margin: "auto" }}
          >
            New Workout
          </Link>,
          <Link
            to="/"
            onClick={() => this.onLogOutClick()}
            key="4"
            className="navbar-item"
          >
            <figure className="image is-32x32">
              <img
                className="is-rounded"
                src={user.avatar}
                alt={user.name}
                title="You must have a gravatar connected to your email to display an image"
              />
            </figure>
            Logout
          </Link>
        ];
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <nav className="navbar is-danger">
        <div className="navbar-start">
          <Link
            to={isAuthenticated ? "/workouts" : "/"}
            className="navbar-item"
          >
            Exercisey
          </Link>
        </div>
        <div className="navbar-end">{this.renderContent()}</div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Header));
