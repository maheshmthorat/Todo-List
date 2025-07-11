import React from "react";
import Alert from "react-bootstrap/Alert";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function TaskList({
  taskItems,
  incCnt,
  taskShow,
  noRecords,
  handleCheckField,
  handleCheckChange,
  Badge,
  onDragEnd,
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="list-group"
          >
            {taskItems.map((item, index) => {
              if (item) {
                incCnt++;
                let itemClass;
                let badgeClass;
                if (item.taskPriority === "High") {
                  itemClass = "list-group-item-danger";
                  badgeClass = "danger";
                }
                if (item.taskPriority === "Medium") {
                  itemClass = "list-group-item-warning";
                  badgeClass = "warning";
                }
                if (item.taskPriority === "Low") {
                  itemClass = "list-group-item-secondary";
                  badgeClass = "secondary";
                }

                let itemHideState = 0;
                let checkedState = false;
                if (item.checked === 1) {
                  itemClass = "list-group-item-primary";
                  checkedState = true;
                  if (taskShow === "completed") {
                    itemHideState = 1;
                  }
                } else {
                  if (taskShow === "active") {
                    itemHideState = 1;
                  }
                }
                if (taskShow === "all") {
                  itemHideState = 1;
                }

                if (itemHideState === 1) {
                  noRecords++;
                  return (
                    <Draggable
                      key={item + incCnt}
                      draggableId={item + incCnt}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => handleCheckField(index)}
                          className={"text-left list-group-item " + itemClass}
                        >
                          <div className="form-check form-switch">
                            <input
                              className={"form-check-input"}
                              type="checkbox"
                              id={"item-" + incCnt}
                              onChange={handleCheckChange}
                              checked={checkedState}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={"item-" + incCnt}
                            >
                              {item.task}
                            </label>
                          </div>
                          <Badge pill bg={badgeClass}>
                            {item.taskPriority}
                          </Badge>
                        </li>
                      )}
                    </Draggable>
                  );
                }
              }
              return undefined;
            })}
            {noRecords === 0 && (
              <Alert variant="warning">
                <Alert.Heading>Warning!</Alert.Heading>
                <p>No records found in this list.</p>
              </Alert>
            )}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
