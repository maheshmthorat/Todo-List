import React from "react";

export default function ClearButton({
  taskShow,
  handleClearCompleted,
  handleShow,
}) {
  let completedCls = "light";
  let activeCls = "light";
  let allCls = "light";
  if (taskShow === "completed") {
    completedCls = "primary";
  }
  if (taskShow === "active") {
    activeCls = "primary";
  }
  if (taskShow === "all") {
    allCls = "primary";
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <button onClick={handleClearCompleted} className="btn btn-dark btn-sm">
          Clear Completed
        </button>
        <div className="btn-group pull-right" role="group" aria-label="Actions">
          <button
            type="button"
            onClick={(event) => handleShow(event, "all")}
            className={`btn btn-${allCls} btn-sm`}
          >
            All
          </button>
          <button
            type="button"
            onClick={(event) => handleShow(event, "active")}
            className={`btn btn-${activeCls} btn-sm`}
          >
            Active
          </button>
          <button
            type="button"
            onClick={(event) => handleShow(event, "completed")}
            className={`btn btn-${completedCls} btn-sm`}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
