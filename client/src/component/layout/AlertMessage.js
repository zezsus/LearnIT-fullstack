import React from "react";

const AlertMessage = ({ info }) => {
  return (
    <div>
      {!info ? null : (
        <div
          className={"alert alert-" + info.type + " text-center"}
          role="alert">
          {info.message}
        </div>
      )}
    </div>
  );
};

export default AlertMessage;
