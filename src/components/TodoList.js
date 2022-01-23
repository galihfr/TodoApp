import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

const TodoList = ({ todoItem, type, openModal, openDelModal, complete }) => {
  return (
    <div className="todo-list my-4">
      <ul className="row mx-2 align-items-center">
        <li className={type === "onProgress" ? "primary-li" : "success-li"}>
          <div className="d-flex align-items-center">
            <div className="col">
              <h5 className="title">
                {todoItem.title}
              </h5>
              <p className="desc">{todoItem.description}</p>
            </div>
            <div className="row gx-2">
              <div className={`col ${type === "done" ? "d-none" : ""}`}>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"       
                  onClick={() => complete(todoItem.id, 1)}           
                >
                  <CheckIcon />
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => openModal(todoItem.id, todoItem.title, todoItem.description)}
                >
                  <EditIcon />
                </button>
              </div>
              <div className={`col ${type === "done" ? "d-none" : ""}`}>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => openDelModal(todoItem.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
