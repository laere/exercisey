import React from "react";

const SetList = props => {
  return (
    <div>
      {props.sets.map(set => {
        return (
          <div>
            <div>Reps: {set.repcount}</div>
            <div>Weight: {set.weight}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SetList;
