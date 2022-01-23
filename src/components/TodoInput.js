import React, { useState } from 'react';
import moment from 'moment';
import { v1 as uuid } from "uuid";
import { useDispatch } from 'react-redux';
import { addNotesItem } from '../store/action/TodoAppAction';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");

  const changeTitleNote = (e) => {
    setTitleNote(e.target.value);
  }

  const changeDescNote = (e) => {
    setDescNote(e.target.value);
  }

  const addNewNote = (e) => {
    e.preventDefault();
    if(titleNote !== ""){
      const newTodo = {
        createdAt: moment().format("YYYY-MM-DD HH:mm"),
        description: descNote,
        id: uuid(),
        status: 0,
        title: titleNote,
      }
      dispatch(addNotesItem(newTodo));
    }

    setTitleNote("");
    setDescNote("");
  }

  return (
      <div className="row todo-input d-flex justify-content-center">
        <div className="col-md-6">
          <form className="" onSubmit={addNewNote}>
              <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="titleNote" placeholder="Title note" value={titleNote} onChange={changeTitleNote} />
                  <label htmlFor="titleNote">Title</label>
              </div>
              <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Desc note" id="descNote" value={descNote} onChange={changeDescNote} style={{height: "100px"}}></textarea>
                  <label htmlFor="descNote">Description</label>
              </div>
              <div className="mb-5 d-flex flex-wrap">
                <button type="button" className="btn btn-primary btn-lg w-100" onClick={addNewNote}>Add New</button>
              </div>
          </form>
        </div>
      </div>
  );
}

export default TodoInput;
