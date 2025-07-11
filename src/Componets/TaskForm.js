import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function TaskForm({
  handleSubmit,
  taskInput,
  invalidInputClass,
  handleChange,
  userInput,
  taskPriority,
}) {
  return (
    <div>
      <h4>MyTodo!</h4>
      <form className="d-flex" onSubmit={handleSubmit}>
        <div className="form-group">
          <FloatingLabel label="Task details" className="mb-3">
            <Form.Control
              ref={taskInput}
              type="text"
              className={invalidInputClass}
              onChange={handleChange}
              value={userInput}
              placeholder="Task details"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel label="Priority">
            <Form.Select
              aria-label="Priority"
              ref={taskPriority}
              className="input-sm"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Select>
          </FloatingLabel>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-md">Add</button>
        </div>
      </form>
      <br />
    </div>
  );
}
