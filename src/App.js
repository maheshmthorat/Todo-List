import "./App.css";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Badge from "react-bootstrap/Badge";

import TaskForm from "./Componets/TaskForm";
import ClearButton from "./Componets/ClearButton";
import TaskList from "./Componets/TaskList";
import ToastMessage from "./Componets/ToastMessage";

import { useState, useRef } from "react";

function App() {
  var incCnt = 0;
  let noRecords = 0;

  const [userInput, setUserInput] = useState("");
  const [taskItems, setTaskItem] = useState(
    JSON.parse(localStorage.getItem("taskItems")) || []
  );

  const [invalidInputClass, setInvalidClass] = useState("");
  const [taskShow, setTaskShow] = useState("all");
  const taskInput = useRef(null);
  const taskPriority = useRef(null);

  const [alertShow, setAlertShow] = useState({
    status: false,
    heading: "",
    mesage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      let taskPriorityVal = taskPriority.current.value;
      let values = [
        ...taskItems,
        {
          task: userInput,
          taskPriority: taskPriorityVal,
          checked: 0,
        },
      ];
      setTaskItem(values);
      localStorage.setItem("taskItems", JSON.stringify(values));
      setInvalidClass("");
      setUserInput("");
      taskInput.current.focus();
      if (taskShow === "completed") {
        setTaskShow("all");
      }
      setAlertShow({
        status: true,
        heading: "Success",
        mesage: "Task added successfully!",
        variant: "success",
      });
    } else {
      setInvalidClass("is-invalid ");
      taskInput.current.focus();
    }
  };
  const handleChange = (e) => {
    setInvalidClass("");
    setUserInput(e.target.value);
  };

  const handleCheckField = (key) => {
    let values = [...taskItems];
    if (values[key].checked === 0) {
      values[key].checked = 1;
    } else {
      values[key].checked = 0;
    }
    setTaskItem(values);
    localStorage.setItem("taskItems", JSON.stringify(values));
  };
  const handleCheckChange = (event) => {};

  const handleClearCompleted = () => {
    if (taskShow === "active") {
      setAlertShow({
        status: true,
        heading: "Error",
        mesage: 'You can clear task from "All" or "Completed" tab!',
        variant: "danger",
      });
      return;
    }
    let values = [...taskItems];
    let checkedItems = [];
    values.forEach((item, index) => {
      if (item) {
        if (item.checked === 1) {
          checkedItems = [...checkedItems, index];
        }
      }
    });
    if (checkedItems.length > 0) {
      let i = 0;
      checkedItems.forEach((item) => {
        values.splice(item - i, 1);
        i++;
      });
      setTaskShow("all");
      setTaskItem(values);
      localStorage.setItem("taskItems", JSON.stringify(values));

      setAlertShow({
        status: true,
        heading: "Success",
        mesage: `${i} items removed successfully!`,
        variant: "success",
      });
    } else {
      setAlertShow({
        status: true,
        heading: "Error",
        mesage: "Please select at least one item",
        variant: "danger",
      });
    }
  };

  const handleShow = (event, conditionShow) => {
    setTaskShow(conditionShow);
    let values = [...taskItems];
    setTaskItem(values);
    localStorage.setItem("taskItems", JSON.stringify(values));
  };

  const resetAlert = (time) => {
    setTimeout(() => {
      setAlertShow({
        status: false,
        heading: "",
        mesage: "",
        variant: "",
      });
    }, time);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = [...taskItems];
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    setTaskItem(updatedTasks);
  };

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
          </div>
          <div className="col-md-4">
            <br />
          </div>
          <div className="col-md-4">
            {alertShow.status && (
              <ToastMessage alertShow={alertShow} resetAlert={resetAlert} />
            )}
            <TaskForm
              handleSubmit={handleSubmit}
              taskInput={taskInput}
              invalidInputClass={invalidInputClass}
              handleChange={handleChange}
              userInput={userInput}
              taskPriority={taskPriority}
            />
            <TaskList
              taskItems={taskItems}
              incCnt={incCnt}
              taskShow={taskShow}
              noRecords={noRecords}
              handleCheckField={handleCheckField}
              handleCheckChange={handleCheckChange}
              Badge={Badge}
              onDragEnd={onDragEnd}
            />
            {taskItems.length > 0 && (
              <ClearButton
                taskShow={taskShow}
                handleClearCompleted={handleClearCompleted}
                handleShow={handleShow}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
