import React from "react";
import { Link } from "react-router-dom";
import SetItem from "components/sets/SetItem";

class SetList extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <table className="table is-bordered is-fullwidth">
          <thead>
            <tr className="panel">
              <th>Reps</th>
              <th>Weight</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sets.map(set => {
              return (
                <SetItem
                  key={set._id}
                  set={set}
                  exerciseId={this.props.exerciseId}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SetList;
